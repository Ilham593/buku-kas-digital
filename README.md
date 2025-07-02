# Buku Kas Digital - Backend API

Ini adalah backend API untuk aplikasi **Buku Kas Digital**, sebuah aplikasi sederhana yang berfungsi untuk mencatat transaksi pemasukan dan pengeluaran. Proyek ini dibangun sebagai bagian dari seri belajar pengembangan web, dengan fokus pada backend menggunakan Node.js, Express, dan MongoDB.

## Fitur Utama

  - ✅ Menambah transaksi baru (pemasukan/pengeluaran).
  - ✅ Melihat semua daftar transaksi yang sudah dicatat.
  - ✅ Mengubah detail transaksi yang sudah ada.
  - ✅ Menghapus transaksi yang salah.

## Teknologi yang Digunakan

  - **Node.js**: Lingkungan eksekusi JavaScript di sisi server.
  - **Express.js**: Framework untuk membangun aplikasi web dan API dengan cepat.
  - **MongoDB**: Database NoSQL untuk menyimpan data transaksi.
  - **Mongoose**: ODM (Object Data Modeling) untuk berinteraksi dengan MongoDB secara lebih mudah.
  - **CORS**: Middleware untuk mengizinkan permintaan dari domain lain.

-----

## Dokumentasi API Endpoints

Berikut adalah daftar semua endpoint yang tersedia:

| Method | Endpoint | Deskripsi | Contoh Body (jika ada) |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/transactions` | Mengambil semua data transaksi, diurutkan dari yang terbaru. | - |
| `POST` | `/api/transactions` | Menambah satu transaksi baru. | `{ "type": "pemasukan", "amount": 50000, "description": "Jual pulsa" }` |
| `PATCH` | `/api/transactions/:id` | Mengubah data transaksi berdasarkan ID uniknya. | `{ "amount": 55000 }` |
| `DELETE` | `/api/transactions/:id` | Menghapus satu transaksi berdasarkan ID uniknya. | - |

-----

## Instalasi & Persiapan Lokal

Untuk menjalankan proyek ini di komputer lokal Anda, ikuti langkah-langkah berikut:

**1. Clone Repository**

```bash
git clone [https://github.com/Ilham593/buku-kas-digital.git]
cd buku-kas-backend
```

*(Ganti `[https://github.com/Ilham593/buku-kas-digital.git]` dengan URL repository GitHub Anda sendiri)*

**2. Install Dependensi**

```bash
npm install
```

**3. Buat File `.env`**
Buat sebuah file baru bernama `.env` di folder utama proyek, lalu tambahkan variabel lingkungan untuk koneksi database.

```
MONGO_URI=mongodb+srv://user:password@cluster...
```

**4. Tambahkan Skrip `dev` (Jika Belum Ada)**
Buka file `package.json`, dan di dalam bagian `"scripts"`, tambahkan baris `"dev"`.

```json
"scripts": {
  "dev": "nodemon server.js"
},
```

**5. Jalankan Server**

```bash
npm run dev
```

Server akan berjalan di `http://localhost:5000`.

