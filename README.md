# 📊 Sistem Absensi Fullstack

Aplikasi web sederhana untuk mengelola data absensi, dibuat menggunakan **React (Frontend)** dan **Laravel (Backend API)**.

---

## 🚀 Fitur Utama

* 📋 Menampilkan data absensi
* ➕ Menambahkan data absensi
* 🗑️ Menghapus data absensi
* 🔄 Data terhubung dengan API (real-time)
* 🎨 Tampilan menggunakan Tailwind CSS *(masih dalam proses)*

---

## 🛠️ Teknologi yang Digunakan

### Frontend

* React (Vite)
* Axios
* Tailwind CSS

### Backend

* Laravel (REST API)
* MySQL

---

## 📂 Struktur Project

```id="g5m0cg"
absensi-fullstack/
│
├── backend/      # Laravel (API)
└── frontend/     # React (Vite)
```

---

## ⚙️ Cara Menjalankan Project

### 1. Clone Repository

```bash id="u9z4u1"
git clone hhttps://github.com/sifah771166-cloud/attendance-fullstack
cd absensi-fullstack
```

---

### 2. Jalankan Backend (Laravel)

```bash id="0d7avj"
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

Backend berjalan di:

```
http://127.0.0.1:8000
```

---

### 3. Jalankan Frontend (React)

```bash id="i0c9lu"
cd frontend
npm install
npm run dev
```

Frontend berjalan di:

```
http://localhost:5173
```

---

## 🔗 Endpoint API

```id="0oztlp"
GET     /api/attendance
POST    /api/attendance
DELETE  /api/attendance/{id}
```

---

## 📌 Status Project

* ✅ Backend API sudah berjalan
* ✅ CRUD absensi sudah berfungsi
* ⚠️ Tampilan (Tailwind CSS) masih dalam proses
* 🔧 Masih tahap pengembangan

---

## 🎯 Rencana Pengembangan

* ✏️ Fitur edit data absensi
* 🔐 Login & autentikasi
* 📊 Dashboard statistik
* 🎨 Perbaikan tampilan (UI/UX)
* ☁️ Deployment ke server

---

## 👨‍💻 Pembuat

* Nama: M. HAFIZH SETIAWAN 
* GitHub: https://github.com/sifah771166-cloud/attendance-fullstack

---

## 📄 Catatan

Project ini dibuat untuk keperluan pembelajaran.

# attendance-fullstack