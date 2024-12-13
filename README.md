# Cakrawidia  
**Platform Diskusi Pelajaran Berbasis Website**  

## Deskripsi  
Cakrawidia adalah platform berbasis website yang menyediakan ruang diskusi untuk tanya jawab terkait pelajaran. Platform ini juga menyediakan fitur berbagi materi belajar gratis, sehingga mempermudah siswa dan pelajar dalam memahami materi.  

## Fitur Utama  
1. **Register dan Login**  
   - Pengguna dapat mendaftar dan login untuk akses penuh.  
   - Pengguna anonim hanya dapat melihat konten tanpa interaksi.  

2. **Diskusi (Tanya Jawab)**  
   - Fasilitas untuk bertanya dan menjawab pertanyaan terkait pelajaran.  

3. **Sistem Poin**  
   - Pengguna mendapatkan poin berdasarkan jumlah like pada jawaban mereka.  

4. **Leaderboard**  
   - Daftar peringkat pengguna dengan jumlah like terbanyak pada pertanyaan dan jawaban.  

5. **Kategorisasi Topik**  
   - Pertanyaan dikelompokkan berdasarkan topik untuk mempermudah pencarian.

## Persyaratan Sistem  
- **C++ Redistributable Latest**  
- **Node.js 22.11.0**  
- **npm 10.9.0**  
- **Composer Latest**  
- **Apache Latest**  
- **PHP 8.2.12**  

## Cara Menjalankan Aplikasi  

### Clone Repository
Repository ini terdiri dari dua submodule: **Frontend (Cakrawidia-FE)** dan **Backend (Cakrawidia-API)**. Pastikan untuk meng-clone repository beserta submodulenya:  

```bash
git clone --recurse-submodules https://github.com/brotherzhafif/Cakrawidia.git
```

### Menjalankan Frontend (Cakrawidia-FE)  
1. Masuk ke folder **Cakrawidia-FE**:  
   ```bash
   cd Cakrawidia-FE
   ```
2. Update Module repo Cakrawidia
   ```bash
   git submodule update --remote
   ```    
3. Install dependensi menggunakan npm:  
   ```bash
   npm install
   ```  
4. Jalankan aplikasi frontend:  
   ```bash
   npm start
   ```  
#### Lebih Lengkap Bisa Akses https://github.com/9riffegndi/Cakrawidia-FE
---

### Menjalankan Backend (Cakrawidia-API)  
1. Masuk ke folder **Cakrawidia-API**:  
   ```bash
   cd Cakrawidia-API
   ```  
2. Install dependensi backend menggunakan Composer:  
   ```bash
   composer install
   ```  
3. Salin file `.env_example` menjadi `.env`:  
   ```bash
   cp .env_example .env
   ```  
4. Generate **APP_KEY** dan **JWT Secret**:  
   ```bash
   php artisan key:generate
   php artisan jwt:secret
   ```  
5. Migrasikan database:  
   ```bash
   php artisan migrate
   ```  
6. Jalankan server backend:  
   ```bash
   php artisan serve
   ```  

> Akses backend melalui `http://localhost:8000`.
#### Lebih Lengkap Bisa Akses https://github.com/brotherzhafif/Cakrawidia_API

---

## Deployment
Aplikasi menggunakan arsitektur berikut untuk deployment:
- **Database**: MySQL di AIVEN  
- **API Backend**: Heroku  
- **Frontend**: Vercel  
--- 