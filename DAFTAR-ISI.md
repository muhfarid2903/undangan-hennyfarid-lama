# 📋 Daftar Isi Lengkap Undangan — Henny & Farid
### (file: `index.html`)

---

## 0. Loading Screen
- Teks **"Memuat Undangan…"** + progress bar (0–100%)
- Nama pasangan: **Henny & Farid**
- Background: foto `galeri14.jpg` (tampil utuh / `contain` + veil gelap)
- Selesai (100%) begitu semua aset **cover + intro** siap; batas maksimal 5 detik

---

## 1. Cover (Sampul)
- Video latar: `bg/cover-video.mp4` (sekali putar, tidak loop), poster `cover.jpg`
- Foto mempelai dalam bingkai melengkung: `cover.jpg`
- Nama pasangan + nama tamu undangan (otomatis dari `?to=` di URL)
- Tombol **"Buka Undangan"**

---

## 2. Intro — 5 slide berurutan (cross-fade, lalu mengulang)
| # | Type | Background | Isi |
|---|------|-----------|-----|
| 1 | `hero` | 🎥 `intro-1-2.mp4` (±10 dtk, tanpa veil) | Video slide 1 & 2 — teks sudah di dalam video |
| 2 | `photo` | `galeri2.jpg` | Foto layar penuh (slide 3) |
| 3 | `photo` | `intro-4.jpg` | Foto layar penuh (slide 4) |
| 4 | `couple` | 🎥 `intro-5-6.mp4` (±10 dtk, tanpa veil) | Video slide 5 & 6 — teks sudah di dalam video |
| 5 | `photo` | `intro-7.jpeg` | Foto layar penuh (slide 7) |

---

## 3. Opening (Ayat)
- Foto berbingkai melengkung: `opening-ayat.jpg`
- Eyebrow: basmalah (maroon)
- **Ayat:** *"Dan di antara tanda-tanda kekuasaan-Nya diciptakan-Nya untukmu pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan hati..."*
- **Sumber:** QS. Ar-Rum: 21

---

## 4. Couple — Mempelai Wanita
- Foto: `mempelai-wanita.jpg`
- Nama: **Henny** — Henny Puspita Syarifuddin, S.Pd., Gr.
- Putri pertama dari Bapak Syarifuddin Achmad & Ibu Habrita, S.Ag.
- IG: [@hennysyr](https://instagram.com/hennysyr)

## 5. Couple — Mempelai Pria
- Foto: `mempelai-pria.jpg`
- Nama: **Farid** — dr. Muhammad Farid
- Putra ketiga dari Bapak Abdul Salam Karim, S.Pd. & Ibu St. Rabiatul Adawiah Balido
- IG: [@muhfarid2994](https://instagram.com/muhfarid2994)

---

## 6. Countdown
- Hitung mundur ke **16 Juli 2026, 10.00 WITA** (Hari/Jam/Menit/Detik)
- Tombol **"+ Simpan ke Kalender"**

---

## 7. Events (Acara)
**Akad**
- Kamis, 16 Juli 2026 · 10.00 WITA – Selesai
- Gedung Dewakkang, Samalewa, Kec. Bungoro, Kab. Pangkep, Sulsel 90617
- Tombol **"📍 Lihat Lokasi"**

**Resepsi**
- Kamis, 16 Juli 2026 · 12.00 WITA – Selesai
- Lokasi sama (Gedung Dewakkang) + tombol peta

---

## 8. Story (Kisah)
- **2019** — Pertama bertemu di bangku kuliah dan menjadi teman dekat.
- **2022** — Memutuskan untuk menjalin hubungan yang lebih serius.
- **2026** — Dengan restu kedua orang tua, melangkah ke jenjang pernikahan.

---

## 9. Gallery (Galeri)
- Grid **masonry** 18 foto (tinggi bervariasi / berseni) + lightbox geser kiri/kanan
- File: `galeri1.jpg` – `galeri18.jpg`

---

## 10. RSVP
- Form: nama, hadir/tidak, jumlah tamu, ucapan & doa
- Terhubung ke Google Sheets
- Tombol **"💌 Lihat Ucapan & Doa"** (popup)

---

## 11. Check-in QR
- QR code check-in otomatis + nama tamu (muncul hanya bila ada nama tamu di link)

---

## 12. Gift (Amplop Digital)
- Tombol **"🎁 Kirim Hadiah"** (popup), berisi:
  - BANK BRI — 022301051237503 — a.n. Henny Puspita Syarifuddin
  - BANK BCA — 3900928440 — a.n. Muhammad Farid

---

## 13. Closing (Penutup)
- Background video: `bg/penutup.mp4` (sekali putar) — pesan penutup & nama pasangan **sudah di dalam video**
- Tanpa kartu/teks tambahan

---

## 🧩 Elemen Mengambang & Pengaturan
- **Bottom Nav** — navigasi cepat antar bagian
- **Tombol Musik ♪** — musik latar: `musik.mp3` (tanpa jingle pembuka)
- **Popup Ucapan & Doa** · **Popup Amplop Digital** · **Lightbox** galeri
- **Efek:** kelopak bunga jatuh (`petals`), partikel emas (`sparkles`), auto-scroll pelan
- **Desktop:** foto besar sisi kiri (`cover.jpg`)

---

## 🎨 Background per Segmen
- Semua segmen berteks (opening, couple, countdown, events, story, rsvp, checkin, gift): foto `bg/segmen.jpeg` + video latar `bg/segmen-video.mp4`
- Cover: `bg/cover-video.mp4` · Penutup: `bg/penutup.mp4`
