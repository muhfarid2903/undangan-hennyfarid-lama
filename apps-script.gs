/* ============================================================
   Google Apps Script — Backend Undangan Digital
   - RSVP & ucapan tamu
   - Check-in QR saat acara
   Tempel seluruh isi file ini ke editor Apps Script, lalu DEPLOY
   ULANG (New version). Lihat CARA-RSVP-GOOGLE-SHEETS.md
   ============================================================ */

const RSVP_SHEET = 'RSVP';
const CHECKIN_SHEET = 'CheckIn';

// ---------- POST ----------
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    const data = JSON.parse(e.postData.contents);

    // --- Check-in dari halaman scanner ---
    if (data.type === 'checkin') {
      const sheet = getCheckinSheet();
      const name = String(data.name || '').trim().slice(0, 100);
      if (!name) return json({ ok: false, error: 'nama kosong' });

      // cek apakah sudah pernah check-in
      const names = sheet.getRange(2, 2, Math.max(sheet.getLastRow() - 1, 1), 1)
                         .getValues().map(function (r) { return String(r[0]).trim().toLowerCase(); });
      const already = names.indexOf(name.toLowerCase()) !== -1;
      if (!already) sheet.appendRow([new Date(), name]);
      return json({ ok: true, name: name, already: already });
    }

    // --- RSVP & ucapan ---
    const sheet = getRsvpSheet();
    sheet.appendRow([
      new Date(),
      String(data.name || '').slice(0, 100),
      String(data.attend || '').slice(0, 30),
      String(data.msg || '').slice(0, 500)
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// ---------- GET ----------
// ?type=checkin -> daftar check-in; selain itu -> daftar ucapan
function doGet(e) {
  const type = e && e.parameter ? e.parameter.type : '';
  if (type === 'checkin') {
    const sheet = getCheckinSheet();
    const rows = sheet.getDataRange().getValues();
    rows.shift();
    const list = rows.map(function (r) { return { t: r[0], name: r[1] }; }).reverse();
    return json({ count: list.length, list: list });
  }
  const sheet = getRsvpSheet();
  const rows = sheet.getDataRange().getValues();
  rows.shift();
  const list = rows.map(function (r) {
    return { t: r[0], name: r[1], attend: r[2], msg: r[3] };
  }).reverse();
  return json(list);
}

// ---------- helpers ----------
function getRsvpSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(RSVP_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(RSVP_SHEET);
    sheet.appendRow(['Waktu', 'Nama', 'Kehadiran', 'Ucapan']);
  }
  return sheet;
}

function getCheckinSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(CHECKIN_SHEET);
  if (!sheet) {
    sheet = ss.insertSheet(CHECKIN_SHEET);
    sheet.appendRow(['Waktu Datang', 'Nama Tamu']);
  }
  return sheet;
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
