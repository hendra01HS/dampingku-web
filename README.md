# 🚀 Panduan Setup Website DampingKu
## GitHub Pages + Firebase

---

## 📁 Struktur File

```
dampingku/
├── index.html              ← Halaman utama (publik)
├── admin/
│   ├── login.html          ← Halaman login admin
│   └── dashboard.html      ← Panel admin (kelola modul & pesanan)
├── js/
│   └── firebase-config.js  ← Konfigurasi Firebase (WAJIB DIISI)
├── firestore.rules         ← Security rules Firestore
└── README.md               ← Panduan ini
```

---

## LANGKAH 1 — Setup Firebase (akun 202516162005)

### A. Buat Project Firebase
1. Buka https://console.firebase.google.com
2. Login dengan akun **202516162005**
3. Klik **"Add project"** → nama project: `dampingku`
4. Nonaktifkan Google Analytics (opsional) → **Create project**

### B. Aktifkan Firestore Database
1. Kiri sidebar → **Firestore Database** → **Create database**
2. Pilih mode: **Production mode** (kita sudah punya rules-nya)
3. Pilih lokasi: **asia-southeast1 (Singapore)** → Enable

### C. Aktifkan Authentication
1. Kiri sidebar → **Authentication** → **Get started**
2. Tab **Sign-in method** → Aktifkan **Email/Password**
3. Tab **Users** → **Add user**:
   - Email: `admin@dampingku.id` (atau email pilihan Anda)
   - Password: buat password yang kuat
4. **Catat email & password ini** — untuk login ke panel admin

### D. Daftarkan Web App
1. Kiri sidebar → **Project Overview** (ikon 🏠) → klik ikon **</>** (Web)
2. App nickname: `dampingku-web` → **Register app**
3. **SALIN semua isi `firebaseConfig`** yang muncul

### E. Isi Firebase Config
Buka file `js/firebase-config.js`, ganti bagian ini:

```javascript
const firebaseConfig = {
  apiKey: "ISI_API_KEY_ANDA",           // ← ganti
  authDomain: "ISI_PROJECT_ID.firebaseapp.com",  // ← ganti
  projectId: "ISI_PROJECT_ID",          // ← ganti
  storageBucket: "ISI_PROJECT_ID.appspot.com",   // ← ganti
  messagingSenderId: "ISI_SENDER_ID",   // ← ganti
  appId: "ISI_APP_ID"                   // ← ganti
};
```

### F. Pasang Security Rules Firestore
1. Firestore → Tab **Rules**
2. Hapus semua teks yang ada
3. Paste isi file `firestore.rules`
4. Klik **Publish**

---

## LANGKAH 2 — Upload ke GitHub Pages

### A. Buat Repository GitHub
1. Buka https://github.com → Login
2. **New repository** → nama: `dampingku-web` (atau bebas)
3. Set **Public** (agar GitHub Pages gratis) → **Create repository**

### B. Upload File
Cara mudah (tanpa terminal):
1. Di halaman repo → **uploading an existing file**
2. Drag & drop SEMUA file dari folder `dampingku/`
   - Pastikan struktur folder terjaga (`admin/`, `js/`)
3. Klik **Commit changes**

### C. Aktifkan GitHub Pages
1. Repo → **Settings** → **Pages** (sidebar kiri)
2. Source: **Deploy from a branch**
3. Branch: **main** → Folder: **/ (root)**
4. Klik **Save**
5. Tunggu 1-2 menit → URL website muncul di sana
   Format: `https://USERNAME.github.io/dampingku-web/`

---

## LANGKAH 3 — Tambah Domain Authorized di Firebase

Agar login admin bisa berjalan di GitHub Pages:
1. Firebase Console → **Authentication** → **Settings**
2. Tab **Authorized domains**
3. **Add domain** → masukkan: `USERNAME.github.io`
4. **Save**

---

## LANGKAH 4 — Isi Modul Pertama

1. Buka: `https://USERNAME.github.io/dampingku-web/admin/login.html`
2. Login dengan email & password admin yang tadi dibuat
3. Di Dashboard → klik **Kelola Modul** (sidebar)
4. Klik **+ Tambah Modul** → isi form → **Simpan**
5. Cek di halaman utama: modul langsung muncul!

---

## 🗺️ Alur Pemesanan

```
Pembeli lihat modul di website
        ↓
Klik "Pesan" → isi form (nama, WA, metode bayar)
        ↓
Data masuk ke Firestore (koleksi "pesanan")
        ↓
Admin dapat notifikasi di Dashboard (badge kuning)
        ↓
Admin konfirmasi pembayaran manual
        ↓
Admin update status → kirim link modul via WhatsApp
        ↓
Status diupdate jadi "Selesai" ✅
```

---

## 📊 Firestore Collections

### `modul`
| Field | Tipe | Keterangan |
|-------|------|------------|
| judul | string | Judul modul |
| kategori | string | membaca / berhitung / emosi / umum |
| deskripsi | string | Deskripsi singkat |
| harga | number | Harga dalam rupiah (misal: 15000) |
| urutan | number | Urutan tampil di website |
| halaman | string | Jumlah halaman (misal: "8-12") |
| durasi | string | Durasi video (misal: "3-5") |
| gambar | string | URL cover gambar (opsional) |
| fileUrl | string | Link unduhan modul (dikirim admin via WA) |
| aktif | boolean | true = tampil di website |
| terlaris | boolean | Tandai badge 🔥 Terlaris |
| baru | boolean | Tandai badge ✨ Baru |

### `pesanan`
| Field | Tipe | Keterangan |
|-------|------|------------|
| modulId | string | ID modul yang dipesan |
| modulNama | string | Nama modul |
| harga | number | Harga saat pesan |
| nama | string | Nama pembeli |
| wa | string | Nomor WhatsApp |
| email | string | Email (opsional) |
| metode | string | Metode bayar |
| catatan | string | Catatan pembeli |
| status | string | menunggu / dikonfirmasi / dikirim / selesai / dibatalkan |
| tanggal | timestamp | Waktu pemesanan |

---

## ✅ Checklist Sebelum Launch

- [ ] Firebase config sudah diisi di `js/firebase-config.js`
- [ ] Email admin sudah dibuat di Firebase Authentication
- [ ] Firestore rules sudah dipasang
- [ ] GitHub Pages sudah aktif dan website bisa diakses
- [ ] Domain GitHub Pages sudah ditambahkan ke Authorized Domains
- [ ] Minimal 1 modul sudah ditambahkan via panel admin
- [ ] Test pesan modul dari halaman utama
- [ ] Cek pesanan muncul di dashboard admin

---

## 📞 Kontak Tim DampingKu
- Instagram: @dampingku.id
- WhatsApp: (isi nomor WA bisnis)
