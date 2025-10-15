<?php

# // composer global require laravel/installer
# // Setelah proses instalasi selesai, kita dapat membuat proyek Laravel baru. Gunakan perintah laravel
# // new diikuti dengan nama proyek yang Anda inginkan. Sebagai contoh, kita akan membuat proyek bernama example-app.
# // laravel new example-app
# ​
# // Silakan ganti example-app dengan nama proyek kamu. Laravel Installer akan secara otomatis membuat
# // sebuah direktori baru dan mengunduh seluruh dependensi yang dibutuhkan.
# // Setelah proses selesai, masuk ke direktori proyek tersebut dan buka menggunakan Visual Studio Code.
# // cd example-app
# // code .
# --------------------------------------------------------------------
# // ### Persiapan Database
# // Buatlah sebuah *database* baru dengan phpMyAdmin atau yang lainnya bebas.

# // ### Konfigurasi Koneksi
# // Buka berkas `.env` yang berada pada direktori utama (*root*) proyek Anda.
# // Berkas ini berfungsi untuk menyimpan variabel lingkungan (*environment variables*),
# // termasuk kredensial untuk koneksi ke *database*.
# // Sesuaikan nilai pada variabel berikut sesuai dengan konfigurasi *database* yang baru saja Anda buat:

# // ```bash
# // DB_CONNECTION=mysql
# // DB_HOST=127.0.0.1
# // DB_PORT=3306
# // DB_DATABASE=nama_database_anda
# // DB_USERNAME=root
# // DB_PASSWORD=password_database_anda (Kosongkan jika tidak ada password)
# // ```
# -------------------------------------------------------------------------------
# // ### Eksekusi Migrasi
# // Langkah terakhir adalah menjalankan migrasi.
# // Migrasi adalah mekanisme kontrol versi untuk skema *database* Anda.
# // Laravel secara *default* sudah menyertakan beberapa *file* migrasi untuk tabel `users`, dan lainnya.
# // Untuk mengeksekusi migrasi ini dan membuat tabel-tabel tersebut di dalam *database* Anda,
# // jalankan perintah Artisan berikut:

# // ```bash
# // php artisan migrate
# // ```

# // Perintah ini akan membaca seluruh *file* migrasi yang ada dan menerjemahkannya
# //  menjadi skema tabel di dalam *database* yang telah Anda konfigurasikan
# -------------------------------------------------------------------------------
# // ## Persiapan File
# // Pada tutorial ini, kita akan membuat aplikasi yang fokus pada satu tujuan:
# menyimpan dan mengelola kutipan (*quotes*). Dengan begitu,
# kita bisa memusatkan perhatian untuk benar-benar memahami cara kerja pembuatan
# *endpoint* CRUD (Create, Read, Update, Delete) di Laravel.
# ----------------------------------------------------------------------------
# // ### Inisialisasi Rute API

# // Pada instalasi Laravel baru, kita perlu mengaktifkan *scaffolding* API secara manual.
# Perintah berikut akan membuat file `routes/api.php` secara otomatis.

# // ```bash
# // php artisan install:api
# // ```

# // Setelah perintah ini berhasil, Anda akan menemukan file `api.php`
# baru di dalam direktori `routes`. Di sinilah kita akan mendaftarkan semua *endpoint* kita.
# ----------------------------------------------------------------------------------
# // ### Menggunakan `php artisan`

# // Daripada membuat *Model*, *Controller*, *Migration*, dan file lainnya
#  satu per satu, kita bisa menggunakan satu perintah Artisan yang sangat efisien.
#  Ini akan menghemat banyak waktu dan memastikan semua file terhubung dengan benar.

# // Gunakan perintah `make:model` dengan beberapa *flag* (opsi) tambahan yang *powerful*:

# // ```bash
# // php artisan make:model Quote -mcrR --api
# // ```

# // Mari kita pecah setiap bagian dari perintah tersebut:

# // - **`make:model Quote`**
# // Ini adalah perintah utamanya, yang bertugas untuk membuat file **Model** bernama
#  `Quote.php` di dalam direktori `app/Models`.
# // - **`m` (Migration)***Flag* ini memberitahu Artisan untuk membuatkan
# file **migration** baru. File ini akan digunakan untuk membuat tabel `quotes` di database Anda.
# // - **`c` (Controller)***Flag* ini akan membuat file **Controller** bernama `QuoteController.php`.
# Ini adalah tempat di mana Anda akan menulis logika untuk menerima permintaan (*request*) dan
#  mengirimkan respons.
# // - **`r` (Resource)***Flag* ini membuat *controller* yang Anda minta (`c`) menjadi tipe
# **resource controller**. Artinya, *controller* tersebut akan langsung diisi dengan metode-metode
#  standar untuk operasi CRUD, seperti `index()`, `store()`, `show()`, `update()`, dan `destroy()`.
# // - **`--api`***Flag* ini adalah modifikasi untuk `r`. Ia memberitahu Artisan bahwa
# *resource controller* ini khusus untuk **API**. Perbedaannya adalah, metode `create()` dan `edit()`
# (yang biasanya untuk menampilkan halaman form HTML) akan dihilangkan,
#  karena tidak diperlukan dalam API berbasis JSON.

# --------------------------------------------------------------------------
# Postman
### Prasyarat
# 1. **Postman Sudah Ter-install**: Pastikan Anda sudah mengunduh dan meng-install aplikasi Postman.
# 2. **Server Laravel Berjalan**: Jalankan proyek Laravel Anda menggunakan perintah di terminal:

#     ```bash
#     php artisan serve
#     ```

# ### Uji Coba API

# 1. Menambahkan Quote Baru (POST)
#     Kita mulai dengan menambahkan data baru ke database.
#     - Buat *request* baru dengan menekan tombol `+`.
#     - Pilih metodenya: **`POST`**.
#     - Masukkan URL: `http://127.0.0.1:8000/api/quotes`
#     - Pindah ke tab **Headers**
#         - Key : `Accept`
#         - Value : `application/json`
#     - Pindah ke tab **Body**.
#     - Pilih `raw` dan ubah formatnya menjadi `JSON`.
#     - Masukkan data *quote* baru dalam format JSON seperti berikut:

#         ```json
#         {
#             "quote": "The only way to do great work is to love what you do.",
#             "author": "Steve Jobs",
#             "category": "Motivation",
#             "source": "Stanford Commencement Address"
#         }
#         ```

#     - Klik Send

#   **Verifikasi**: Anda akan melihat respons dari server dengan status **`201 Created`**.
#  *Body* respons akan berisi data *quote* yang baru saja Anda buat, lengkap dengan `id` dan
#  `timestamps`.

# 2. Menampilkan Semua Quote (GET)
#     Sekarang, mari kita lihat semua data yang ada di database.

#     - Buat *request* baru.
#     - Pilih metodenya: **`GET`**.
#     - Masukkan URL: `http://127.0.0.1:8000/api/quotes`
#     - Pindah ke tab **Headers**
#         - Key : `Accept`
#         - Value : `application/json`
#     - Klik **Send**.

#     **Verifikasi**: Anda akan melihat respons dengan status **`200 OK`**. *Body* respons akan berisi sebuah *array* dari semua *quote* yang telah Anda simpan.

# 3. Menampilkan Satu Quote Spesifik (GET by ID)
#     Kita akan mengambil satu *quote* berdasarkan `id`-nya.

#     - Buat *request* baru.
#     - Pilih metodenya: **`GET`**.
#     - Masukkan URL: `http://127.0.0.1:8000/api/quotes/1`
#       (ganti `1` dengan `id` dari *quote* yang ada di database Anda).
#     - Klik **Send**.

#     **Verifikasi**: Anda akan mendapat respons **`200 OK`** dengan detail dari
#       satu *quote* yang Anda minta. Jika Anda memasukkan `id` yang tidak ada, Anda akan
#       mendapat *error* **`404 Not Found`**.

# 4. Memperbarui Quote (PUT)
#     Mari kita ubah data dari *quote* yang sudah ada.

#     - Buat *request* baru.
#     - Pilih metodenya: **`PUT`**.
#     - Masukkan URL: `http://127.0.0.1:8000/api/quotes/1` (ganti `1` dengan `id` yang ingin Anda ubah).
#     - Pindah ke tab **Headers**
#         - Key : `Accept`
#         - Value : `application/json`
#     - Pindah ke tab **Body**, pilih `raw` dan `JSON`.
#     - Masukkan data yang ingin Anda ubah. Anda tidak perlu mengirim semua field, cukup yang ingin diubah saja.

#         ```json
#         {
#             "author": "Steve Jobs (Updated)"
#         }
#         ```

#     - Klik **Send**.
#     **Verifikasi**: Responsnya adalah **`200 OK`**,
#       dan *body*-nya akan menampilkan data *quote* dengan `author` yang sudah diperbarui.

# 5. Menghapus Quote (DELETE)

#     Terakhir, kita akan menghapus data.

#     - Buat *request* baru.
#     - Pilih metodenya: **`DELETE`**.
#     - Masukkan URL: `http://127.0.0.1:8000/api/quotes/1` (ganti `1` dengan `id` yang ingin Anda hapus).
#     - Pindah ke tab **Headers**
#         - Key : `Accept`
#         - Value : `application/json`
#     - Klik **Send**.

#     **Verifikasi**: Respons yang benar adalah status **`204 No Content`**. Ini menandakan data berhasil dihapus, dan karena itu, tidak ada konten yang perlu ditampilkan. *Body* dari respons akan kosong.


use App\Http\Controllers\QuoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('quotes', QuoteController::class);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
