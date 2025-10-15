// # React

// Tools

// 1. Node Js minimum version 22.0
// 2. Visual Studio Code
// 3. Niat
// 4. Visual Studio Code Extension
//     1. https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets
//     2. https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
//     3. https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons *(optional)*

// Dokumentasi

// 1. https://vite.dev/guide/
// 2. https://react.dev/
// 3. https://tailwindcss.com/
// 4. https://tailwindcss.com/docs/responsive-design
// 5. https://reactrouter.com/

// ## Membuat Project React

// ### Langkah 1: Buka Terminal dan Navigasi ke Folder

// Pertama, kita perlu memberi tahu komputer di mana kita ingin menyimpan proyek baru ini.

// 1. Buka aplikasi terminal Anda.
// 2. Gunakan perintah `cd` (change directory) untuk berpindah ke folder tempat Anda biasa menyimpan proyek-proyek *coding*.

// ### Langkah 2: Inisialisasi Proyek React Baru dengan Vite

// Kita akan menggunakan satu perintah untuk membuat seluruh kerangka proyek React kita.

// Jalankan perintah berikut di terminal Anda:

// ```bash
// npm create vite@latest
// ```

// **Penjelasan Perintah:**

// - `npm`: Ini adalah Node Package Manager, alat bantu kita untuk mengelola semua "paket" atau *library* kode.
// - `create vite@latest`: Perintah ini memberitahu `npm` untuk menjalankan paket `create-vite` dengan versi terbarunya (`@latest`), yang berfungsi sebagai pembuat proyek.

// Setelah Anda menekan Enter, Vite akan mengajukan beberapa pertanyaan. Ikuti panduan ini:

// 1. **Project name: …**
//     - Ketik nama proyek Anda, lalu tekan Enter.
// 2. **Select a framework: › - Use arrow keys. Return to submit.**
//     - Gunakan tombol panah bawah untuk memilih **React**, lalu tekan Enter.
// 3. **Select a variant: › - Use arrow keys. Return to submit.**
//     - Pilih **JavaScript**, lalu tekan Enter.
// 4. **Use rolldown-vite**
//     - Pilih **Yes,** lalu tekan Enter
// 5. Install with npm and start now ?
//     - Pilih **Yes,** lalu tekan Enter

// ### Langkah 3: Masuk ke Folder Proyek dan Instalasi Dependencies

// Saat ini, kita masih berada di luar folder proyek yang baru dibuat.

// 1. **Masuk ke dalam folder proyek:**Bash
    
//     `cd proyek-react-pertama`
    
// 2. **Buka proyek di VS Code:**
// Jika Anda menggunakan VS Code, Anda bisa mengetik perintah keren ini untuk membuka seluruh folder proyek:Bash
    
//     `code .`
    

// ### Langkah 4: Menjalankan Aplikasi dan Melihat Hasilnya!

// Setelah semua dependensi terinstal, kita siap menyalakan *development server*.

// Jalankan perintah berikut di terminal Anda (pastikan Anda masih di dalam folder `nama-project-kamu`):

// ```bash
// npm run dev
// ```

// **Penjelasan Perintah:**

// - `npm run dev`: Perintah ini menjalankan *script* bernama "dev" yang sudah disiapkan oleh Vite. *Script* ini akan memulai sebuah server lokal yang ringan, meng-kompilasi kode React kita, dan siap menampilkannya di browser.

// Sekarang, buka browser web Anda (seperti Chrome atau Firefox), lalu salin dan tempel URL yang ada di baris `Local:`.

// ## Styling Aplikasi React Anda dengan Tailwind CSS

// Dokumentasi cara install tailwindcss 

// https://tailwindcss.com/docs/installation/using-vite

// ### Langkah 1: Instalasi Tailwindcss

// Setiap kali kita ingin menambahkan fungsionalitas baru ke proyek JavaScript, langkah pertamanya adalah menginstal paket yang relevan.

// Pastikan Anda berada di direktori proyek yang benar di terminal Anda, lalu jalankan perintah berikut:

// ```bash
// npm install tailwindcss @tailwindcss/vite
// ```

// **Penjelasan Perintah:**

// - `npm install`: Perintah standar untuk menambahkan paket baru ke proyek kita.
// - `tailwindcss`: Ini adalah paket inti dari *framework* Tailwind CSS itu sendiri.
// - `@tailwindcss/vite`: Ini adalah paket *plugin* khusus yang memungkinkan Tailwind CSS untuk bekerja secara efisien dengan Vite, *build tool* yang kita gunakan.

// ### Langkah 2: Mendaftarkan Tailwind CSS sebagai Plugin Vite

// Setelah terinstal, kita perlu memberi tahu Vite bahwa kita memiliki "alat bantu" baru yang ingin kita gunakan. Kita melakukan ini di dalam file konfigurasi Vite.

// Buka proyek Anda di VS Code dan cari file bernama `vite.config.js`. Ubah isinya agar terlihat persis seperti ini:

// ```jsx
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss()
//   ],
//   resolve : {
//     alias : {
//       "@" : "/src",
//       "@css" : "/src/assets/css"
//     }
//   }
// })
// ```

// **Penjelasan Kode:**

// - `import tailwindcss from '@tailwindcss/vite'`: Baris ini mengimpor plugin Tailwind yang baru saja kita instal agar bisa digunakan di dalam file ini.
// - `tailwindcss()`: Dengan menambahkan ini ke dalam *array* `plugins`, kita secara resmi mengaktifkan plugin tersebut. Sekarang, Vite tahu cara memproses dan memahami sintaks khusus Tailwind CSS setiap kali kita menjalankan atau membangun proyek.

// ### Langkah 3: Membuat File CSS Utama

// Tailwind bekerja dengan cara menambahkan class ke dalam sebuah file CSS. Kita perlu membuat file ini dan memberitahu Tailwind untuk "mengisinya".

// 1. Di dalam folder `src`, buatlah folder baru bernama `assets`.
// 2. Di dalam folder `assets` yang baru dibuat, buat lagi folder baru bernama `css`.
// 3. Di dalam folder `css`, buat sebuah file baru bernama `styles.css`.
// 4. Buka file `styles.css` tersebut dan tambahkan kode berikut:

// ```css
// @import "tailwindcss";
// ```

// Struktur folder saat ini :

// ```jsx
// ┣ 📂assets
// ┃ ┣ 📂css
// ┃ ┃ ┗ 📜styles.css
// ┃ ┗ 📜react.svg
// ┗ 📜main.jsx
// ```

// ### Langkah 4: Menguji Coba Konfigurasi di `main.jsx`

// Langkah terakhir adalah memastikan semuanya terhubung dengan benar. Cara terbaik untuk melakukannya adalah dengan mengimpor file CSS kita dan mencoba menggunakan salah satu kelas utilitas Tailwind.

// Buka file `src/main.jsx`. Lalu hapus baris berikut ini, karena tidak kita butuhkan

// ```jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css' // HAPUS
// import App from './App.jsx' // HAPUS

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App /> // HAPUS
//   </StrictMode>,
// )
// ```

// Jika sudah lalu tambahkan baris berikut ini

// ```jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import "@css/style.css"

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <div className='bg-blue-500'>
//       Hello
//     </div>
//   </StrictMode>,
// )
// ```

// Jika sudah silahkan jalankan kembali project nya dan lihat pada browser apakah sudah menampilkan text `Hello` dengan background biru?

// ### Langkah 5: Membersihkan File Bawaan untuk Awal yang Baru

// Hapus file-file berikut ini di dalam folder `src`:

// 1. **`src/App.jsx`**: Ini adalah komponen utama aplikasi contoh dari Vite, yang menampilkan logo React dan beberapa tautan. Kita akan membuat komponen `App` versi kita sendiri nanti.
// 2. **`src/App.css`**: File CSS ini berisi *styling* khusus untuk `App.jsx`. Karena kita akan menghapus komponennya, kita tidak lagi memerlukan *styling*nya.
// 3. **`src/index.css`**: Ini adalah file CSS global lain yang disediakan oleh template Vite. Kita sudah memiliki file `src/assets/css/styles.css` untuk Tailwind, jadi file ini menjadi berlebihan dan bisa kita hapus dengan aman.

// ## Axios

// Untuk membuat aplikasi React kita bisa "berbicara" dengan API Laravel yang sudah kita buat, kita akan menggunakan **Axios**. Axios adalah sebuah *library* yang sangat populer untuk membuat permintaan HTTP (seperti GET, POST, PUT, DELETE) dari *browser*.

// ### Install Axios

// Pertama, kita perlu menambahkan Axios ke dalam proyek React kita. Buka terminal Anda, pastikan Anda berada di dalam direktori proyek React, lalu jalankan perintah berikut:

// ```flow
// npm install axios
// ```

// ### Konfigurasi Axios

// Daripada menulis URL API berulang kali di setiap komponen, kita akan membuat satu file konfigurasi. Ini membuat kode kita lebih bersih, mudah dikelola, dan mudah diubah jika URL API-nya berganti.

// Di dalam folder `src`, buat sebuah folder baru bernama `api`. Di dalam folder `api` tersebut, buat sebuah file baru bernama `apiClient.js`.

// Salin dan tempel kode berikut ke dalam file `apiClient.js` Anda:

// ```flow
// import axios from "axios";

// // Membuat instance Axios dengan konfigurasi default
// const apiClient = axios.create({
//     // URL dasar untuk semua permintaan ke API kita
//     baseURL: 'http://127.0.0.1:8000/api', 
//     // Header default yang akan dikirim pada setiap permintaan
//     headers: {
//         "Accept": "application/json"
//     }
// });

// export default apiClient;
// ```

// **Penjelasan Kode:**

// - `axios.create()`: Perintah ini membuat sebuah "klien" Axios yang bisa kita konfigurasi secara khusus untuk API kita.
// - `baseURL`: Dengan menetapkan ini, kita tidak perlu lagi mengetik `http://127.0.0.1:8000/api` setiap kali membuat permintaan. Cukup gunakan `/quotes`, `/quotes/1`, dan seterusnya.
// - `headers`: Ini memastikan bahwa setiap permintaan yang kita kirim akan memberitahu server Laravel bahwa kita mengharapkan respons dalam format JSON.
// - `export default apiClient`: Ini membuat *instance* `apiClient` yang sudah dikonfigurasi bisa diimpor dan digunakan di seluruh bagian aplikasi React kita.

// ## Membuat Component & Pages

// Sekarang, mari kita siapkan struktur folder untuk komponen UI dan juga struktur folder untuk page kita. Di dalam direktori `src`, buat folder dan file hingga strukturnya menjadi seperti ini:

// ```flow
// ┣ 📂api
// ┃ ┗ 📜apiClient.js
// ┣ 📂assets
// ┃ ┣ 📂css
// ┃ ┃ ┗ 📜style.css
// ┃ ┗ 📜react.svg
// ┣ 📂components
// ┃ ┗ 📂ui
// ┃   ┣ 📜Button.jsx
// ┃   ┗ 📜Input.jsx
// ┣ 📂pages
// ┃ ┗ 📂quotes
// ┃   ┣ 📜CreateQuote.jsx
// ┃   ┣ 📜Quote.jsx
// ┃   ┗ 📜UpdateQuote.jsx
// ┗ 📜main.jsx
// ```

// ### Button.jsx

// Komponen ini bertujuan untuk membuat sebuah tombol (`<button>`) yang konsisten secara visual di seluruh aplikasi. Daripada menulis kode CSS yang sama berulang kali, kita cukup menggunakan komponen ini.

// ```jsx
// export default function Button({ type, children, ...props }) {
//   return (
//     <button
//       type={type}
//       className="px-5 py-2.5 rounded-lg bg-zinc-900 text-white font-semibold cursor-pointer transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg active:scale-95 active:shadow-md focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500"
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }
// ```

// ### **Penjelasan Kode**

// - **`export default function Button({ type, children, ...props })`**
//     - `children`: Ini adalah *prop* spesial di React. Nilainya adalah apa pun yang Anda letakkan di antara tag pembuka dan penutup komponen. Contoh: `<Button>Klik Saya</Button>`, maka `children` di sini adalah teks "Klik Saya". Ini membuat teks tombol menjadi dinamis.
//     - `type`: Ini secara spesifik menerima tipe tombol HTML (misalnya, `"button"`, `"submit"`, atau `"reset"`).
//     - `...props`: Ini adalah **rest parameter** JavaScript. Fungsinya adalah mengumpulkan semua *props* lain yang tidak disebutkan secara eksplisit (`type`, `children`) ke dalam sebuah objek bernama `props`. Ini membuat komponen sangat fleksibel. Anda bisa menambahkan *prop* apa pun seperti `onClick`, `disabled`, dll., dan semuanya akan terkumpul di sini.
// - **`className="..."`**
// Ini adalah kelas-kelas dari **Tailwind CSS** yang mendefinisikan tampilan tombol.
//     - `px-5 py-2.5 rounded-lg`: Mengatur *padding* (ruang di dalam) dan sudut yang membulat.
//     - `bg-zinc-900 text-white font-semibold`: Mengatur warna latar, warna teks, dan ketebalan font.
//     - `hover:-translate-y-0.5 hover:shadow-lg`: Memberi efek animasi saat kursor diarahkan ke tombol (sedikit terangkat dan muncul bayangan).
//     - `active:scale-95`: Memberi efek saat tombol diklik (sedikit mengecil).
// - **`{...props}`**
// Ini adalah **spread operator**. Fungsinya adalah "menebarkan" semua isi dari objek `props` sebagai atribut ke elemen `<button>` HTML. Jadi, jika Anda menulis `<Button onClick={handleClick} disabled />`, maka atribut `onClick` dan `disabled` akan secara otomatis diterapkan ke tombol.

// ### Input.jsx

// Komponen ini menyediakan elemen `<input>` yang lengkap dengan `<label>` yang terhubung secara otomatis. Tujuannya adalah untuk menyeragamkan tampilan semua kolom input di aplikasi.

// ```jsx
// export default function Input({ id, type = "text", label, ...props }) {
//   return (
//     <div className="flex flex-col gap-1">
//       {label && (
//         <label
//           htmlFor={id}
//           className="text-sm font-medium text-zinc-800 dark:text-zinc-200"
//         >
//           {label}
//         </label>
//       )}
//       <input
//         id={id}
//         type={type}
//         autoComplete="off"
//         className="w-full px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 focus:border-zinc-500 transition duration-150 ease-in-out"
//         {...props}
//       />
//     </div>
//   );
// }
// ```

// ### **Penjelasan Kode**

// - **`export default function Input({ id, type = "text", label, ...props })`**
//     - `id`: *Prop* ini sangat penting untuk aksesibilitas, digunakan untuk menghubungkan `<label>` (`htmlFor={id}`) dengan `<input>` (`id={id}`).
//     - `type = "text"`: Ini adalah **nilai default**. Jika Anda tidak memberikan *prop* `type` saat menggunakan komponen ini, maka secara otomatis tipenya akan menjadi `"text"`.
//     - `label`: Teks yang akan ditampilkan sebagai label untuk input.
//     - `...props`: Sama seperti komponen `Button`, ini mengumpulkan semua *props* lain seperti `value`, `onChange`, `placeholder`, `name`, dll.
// - **`{label && (<label>...</label>)}`**
// Ini adalah **conditional rendering**. Artinya, elemen `<label>` hanya akan ditampilkan **jika** *prop* `label` ada isinya (bukan `null` atau string kosong). Ini membuat label menjadi opsional.
// - **`<input {...props} />`**
// Sama seperti pada komponen `Button`, ini menerapkan semua *props* tambahan (seperti `onChange`, `placeholder`) langsung ke elemen `<input>` HTML.

// ### Quotes.jsx

// Komponen ini berfungsi sebagai sebuah "halaman" (Nanti di bahas pada `react router`) yang bertanggung jawab untuk mengambil (*fetch*) data kutipan dari API yang telah kita buat, lalu menampilkannya dalam bentuk daftar kepada pengguna.

// ```jsx
// import http from "@api/apiClient";
// import { useCallback, useEffect, useState } from "react"

// export default function QuotePage() {
//     const [isLoading, setIsLoading] = useState(false);
//     const [quotes, setQuotes] = useState([]);

//     const fetchQuotes = useCallback(async () => {
//         try {
//             setIsLoading(true);
//             const response = await http.get("/quotes");

//             setQuotes(response.data.data);
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setIsLoading(false);
//         }
//     }, [])

//     useEffect(() => {
//         fetchQuotes()
//     }, [fetchQuotes])

//     if (isLoading) {
//         return <div>Loading...</div>
//     } else {
//         return <div className="container mx-auto space-y-5">
//             <h1 className="font-semibold text-2xl">Quotes</h1>
//             <ul className="space-y-4 divide-y divide-zinc-200 dark:divide-zinc-700">
//                 {quotes.map((quote) => (
//                     <li key={quote.id} className="pt-4 p-5 border border-slate-300">
//                         <blockquote className="text-zinc-800 dark:text-zinc-100 italic">
//                             “{quote.quote}”
//                         </blockquote>
//                         <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
//                             — {quote.author}
//                             {quote.year && <span className="ml-1">({quote.year})</span>}
//                             {quote.source && <span className="ml-2 italic">• {quote.source}</span>}
//                         </div>
//                         {quote.category && (
//                             <span className="mt-2 inline-block text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
//                                 {quote.category}
//                             </span>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     }
// }
// ```

// ### **Penjelasan Kode**

// - **`useState` (Hook)**
//     - `const [isLoading, setIsLoading] = useState(false);`: Membuat *state* untuk melacak status pengambilan data. `true` berarti sedang memuat, `false` berarti sudah selesai.
//     - `const [quotes, setQuotes] = useState([]);`: Membuat *state* untuk menyimpan data kutipan yang berhasil diambil dari API. Nilai awalnya adalah sebuah *array* kosong.
// - **`useCallback` (Hook)**
//     - `const fetchQuotes = useCallback(async () => { ... }, []);`: *Hook* `useCallback` "mengingat" fungsi `fetchQuotes` agar tidak dibuat ulang setiap kali komponen di-*render*. Ini adalah optimasi, terutama penting karena fungsi ini digunakan di dalam `useEffect`.
//     - **`try...catch...finally`**: Ini adalah blok penanganan *error*.
//         - `try`: Kode di sini dieksekusi. `setIsLoading(true)` diatur, lalu `http.get("/quotes")` memanggil API. Jika berhasil, `setQuotes(response.data.data)` akan menyimpan data ke dalam *state*.
//         - `catch`: Jika terjadi *error* saat memanggil API, kode di blok ini akan berjalan.
//         - `finally`: Kode di blok ini **selalu** berjalan, baik berhasil maupun gagal. `setIsLoading(false)` di sini memastikan status *loading* selalu dimatikan setelah proses selesai.
// - **`useEffect` (Hook)**
//     - `useEffect(() => { fetchQuotes(); }, [fetchQuotes]);`: *Hook* ini menjalankan "efek samping", seperti mengambil data. Kode ini memberitahu React: "Jalankan fungsi `fetchQuotes` satu kali setelah komponen ini pertama kali ditampilkan di layar."
// - **Conditional Rendering (`if (isLoading)`)**
//     - Jika `isLoading` bernilai `true`, komponen akan menampilkan teks "Loading...".
//     - Jika `isLoading` bernilai `false`, komponen akan menampilkan daftar kutipan.
// - **Menampilkan Daftar (`quotes.map(...)`)**
//     - Ini adalah cara standar di React untuk mengubah sebuah *array* data (`quotes`) menjadi daftar elemen HTML.
//     - `key={quote.id}`: Atribut `key` ini wajib ada dan sangat penting untuk performa. React menggunakannya untuk mengidentifikasi setiap item secara unik saat ada perubahan pada daftar.

// ### Uji Coba

// Silahkan buka kembali file `main.jsx` dan ubah isi nya menjadi :

// ```jsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "@css/style.css";
// import QuotePage from "./pages/quotes/Quote";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <QuotePage />
//   </StrictMode>,
// );
// ```

// Lalu cek di browser, apakah list quote yang dibuat sebelumnya tampil ?

// ### Delete Quote

// Saat ini, komponen `Quote.jsx` kita melakukan *looping* atau pemetaan (`.map()`) melalui *array* `quotes` untuk menampilkan setiap kutipan sebagai item dalam sebuah daftar. Nah, di sinilah tempat yang paling logis untuk menaruh tombol "Hapus". Mengapa? Karena kita ingin setiap kutipan memiliki tombol hapusnya sendiri.

// Buka kembali file `Quote.jsx` Anda. Di dalam `quotes.map`, kita akan menambahkan sebuah tombol.

// ```jsx
// <div className="mt-5">
//     <Button onClick={() => deleteQuote(quote.id)}>Hapus</Button>
// </div>
// ```

// Letakkan kode di atas di dalam `<li>` untuk setiap `quote`

// Setelah Anda menambahkan kode tombol tersebut, mari kita lihat bagaimana struktur `quotes.map` seperti berikut ini

// ```jsx
// // File: Quote.jsx
// import Button from "@components/ui/Button";
// ...
// {quotes.map((quote) => (
//     <li key={quote.id} className="pt-4 p-5 border border-slate-300">
//         {/* Kode Sebelumnya */}
//         {/* Tombol Hapus yang baru kita tambahkan */}
//         <div className="mt-5">
//             <Button onClick={() => deleteQuote(quote.id)}>Hapus</Button>
//         </div>
//     </li>
// ))}
// ```

// ### Penjelasan Kode :

// - `onClick={...}`: Ini adalah *event handler*. Atribut ini memberitahu React untuk menjalankan fungsi di dalamnya **ketika tombol diklik**.
// - `() => deleteQuote(quote.id)`: Ini adalah bagian yang paling penting.
//     - Kita menggunakan **fungsi panah (arrow function)** `() => ...` untuk "membungkus" pemanggilan fungsi `deleteQuote`. **Mengapa?** Jika kita hanya menulis `onClick={deleteQuote(quote.id)}`, fungsi tersebut akan langsung dijalankan saat komponen di-*render*, bukan saat tombol diklik. Ini akan menyebabkan semua kutipan terhapus seketika!
//     - Dengan menggunakan `() =>`, kita membuat sebuah fungsi baru yang baru akan dijalankan ketika `onClick` terjadi. Fungsi inilah yang kemudian memanggil `deleteQuote`.
//     - `quote.id`: Kita meneruskan `id` dari kutipan yang sedang di-looping saat itu. Ini memastikan kita menghapus kutipan yang benar.

// Mari kita buat fungsi `async` baru bernama `deleteQuote`. Fungsi ini perlu menerima satu parameter, yaitu `id` dari `quote` yang ingin kita hapus.

// Tambahkan kode berikut di dalam komponen `Quote:` 

// ```jsx
// const [isLoading, setIsLoading] = useState(false);

// // Kode lain
// const deleteQuote = async (id) => {
//     try {
//         // 1. Tampilkan indikator loading
//         setIsLoading(true);

//         // 2. Kirim permintaan DELETE ke API
//         const response = await http.delete(`/quotes/${id}`);

//         // 3. Jika berhasil, muat ulang data kutipan
//         if (response.status === 200) {
//             fetchQuotes();
//         }
//     } catch (error) {
//         // 4. Tangani jika terjadi error
//         console.error("Gagal menghapus quote:", error);
//     } finally {
//         // 5. Sembunyikan indikator loading
//         setIsLoading(false);
//     }
// }
// ```

// ### Penjelasan Kode

// 1. `const deleteQuote = async (id) => { ... }`
//     - Kita mendeklarasikan sebuah fungsi bernama `deleteQuote` yang menerima `id` sebagai argumen.
//     - Kata kunci `async` sangat penting. Ini menandakan bahwa di dalam fungsi ini, kita akan melakukan sebuah operasi yang butuh waktu (asynchronous), yaitu panggilan API. Ini memungkinkan kita untuk menggunakan `await`.
// 2. `try { ... }`
//     - Blok `try` berisi kode yang "berpotensi gagal". Panggilan jaringan bisa saja gagal karena koneksi internet terputus, server *down*, atau masalah lainnya. Kita menaruh logika utama kita di sini.
// 3. `setIsLoading(true);`
//     - Ini adalah praktik **UX (User Experience)** yang sangat baik. Sebelum kita memulai proses hapus, kita mengubah *state* `isLoading` menjadi `true`. Ini memberi kita kesempatan untuk menampilkan *spinner* atau menonaktifkan tombol, sehingga pengguna tahu bahwa aplikasi sedang bekerja.
// 4. `const response = await http.delete(`quote/${id}`);`
//     - Inilah inti dari fungsi kita.
//     - `await`: Perintah ini akan "menjeda" eksekusi fungsi sampai panggilan API selesai.
//     - `http.delete(...)`: Kita menggunakan metode `delete` dari Axios untuk mengirim permintaan HTTP `DELETE` ke *endpoint* server kita.
//     - `/quotes/${id}`: Ini adalah URL *endpoint*. Kita menggunakan *template literal* untuk menyisipkan `id` kutipan yang ingin dihapus. Contohnya, jika `id` adalah `123`, maka URL-nya akan menjadi `/quotes/123`.
// 5. `if (response.status === 200) { fetchQuotes(); }`
//     - Jika permintaan `DELETE` berhasil, server biasanya akan merespons dengan status kode `200` (OK).
//     - Jika statusnya `200`, itu artinya kutipan telah berhasil dihapus dari database. Namun, data yang ada di aplikasi React kita sekarang sudah **usang**.
//     - Oleh karena itu, kita memanggil `fetchQuotes()` lagi untuk mengambil daftar kutipan yang terbaru dari server, sehingga kutipan yang dihapus akan hilang dari layar.
// 6. `catch (error) { ... }`
//     - Jika terjadi masalah di dalam blok `try` (misalnya, server mengembalikan status error 500), eksekusi akan langsung melompat ke blok `catch`.
//     - Di sini, kita mencatat (*log*) *error*nya ke konsol. Dalam aplikasi nyata, Anda mungkin ingin menampilkan pesan kesalahan yang ramah kepada pengguna.
// 7. `finally { ... }`
//     - Blok `finally` adalah bagian yang **selalu dijalankan**, tidak peduli apakah blok `try` berhasil atau blok `catch` yang dieksekusi.
//     - `setIsLoading(false)`: Ini adalah tempat yang sempurna untuk menyembunyikan indikator *loading*. Baik prosesnya berhasil maupun gagal, kita harus berhenti menampilkan *spinner* agar pengguna bisa berinteraksi kembali dengan aplikasi.

// ### Add New Quote

// ### Component dan State

// Setelah berhasil menampilkan dan menghapus data, sekarang saatnya kita membuat fitur yang paling fundamental: menambahkan data baru. Di bagian ini, kita akan membangun sebuah halaman lengkap dengan form untuk membuat dan menyimpan kutipan baru ke dalam database.

// Silakan buka file `CreateQuote.jsx` (atau buat jika belum ada) dan masukkan kode berikut:

// ```jsx
// import http from "@api/apiClient";
// import Button from "@components/ui/Button";
// import Input from "@components/ui/Input";
// import { useId, useState } from "react";

// export default function CreateNewQuote() {
//     // State untuk menyimpan status loading
//     const [isLoading, setIsLoading] = useState(false);
    
//     // State untuk menyimpan data form
//     const [form, setForm] = useState({
//         quote: "",
//         author: "",
//         year: "",
//         category: "",
//         source: ""
//     });

//     return (
//         // ... JSX untuk tampilan form akan datang ke sini ...
//     )
// }
// ```

// ### **Penjelasan Kode:**

// - **Imports**: Kita mengimpor semua yang kita butuhkan di awal.
//     - `http`: Klien API kita untuk berkomunikasi dengan server.
//     - `Button`, `Input`: Komponen UI yang sudah kita siapkan sebelumnya untuk konsistensi tampilan.
//     - `useId`, `useState`: *Hooks* bawaan dari React. `useState` untuk mengelola *state*, dan `useId` untuk menghasilkan ID unik (berguna untuk aksesibilitas pada label form).
// - **State Management**:
//     - `const [isLoading, setIsLoading] = useState(false)`: *State* ini bertipe *boolean* (`true`/`false`). Fungsinya adalah untuk melacak apakah aplikasi sedang dalam proses mengirim data ke server. Ini sangat penting untuk memberikan umpan balik ke pengguna, seperti menampilkan teks "Saving..." pada tombol.
//     - `const [form, setForm] = useState({ ... })`: Ini adalah *state* utama kita. Kita menggunakan sebuah objek untuk menampung semua nilai dari setiap *input* dalam form. Menginisialisasinya dengan *string* kosong adalah praktik yang baik.

// ### Menangani Input Pengguna

// Setiap kali pengguna mengetik di salah satu kolom *input*, kita perlu memperbarui *state* `form` kita. Daripada membuat satu fungsi untuk setiap *input*, kita bisa membuat satu fungsi cerdas yang bisa menangani semuanya.

// Tambahkan fungsi `handleOnChange` di dalam komponen `CreateNewQuote`:

// ```jsx
// const handleOnChange = (event) => {
//         const { name, value } = event.target;

//         setForm({
//             ...form,
//             [name]: value
//         });
//     }
// ```

// ### **Penjelasan Kode:**

// - `const { name, value } = event.target;`: Ketika sebuah *event* `onChange` terjadi pada sebuah *input*, `event.target` merujuk pada elemen *input* itu sendiri. Kita mengambil properti `name` dan `value` darinya. **Penting:** Properti `name` pada elemen `<Input>` harus sama persis dengan *key* yang ada di *state* `form` kita (misalnya, `name="author"` akan menargetkan `form.author`).
// - `setForm({ ... })`: Kita memanggil fungsi *setter* untuk memperbarui *state*.
// - `...form`: Ini adalah *spread syntax*. Kita menyalin semua nilai yang sudah ada di dalam objek `form`.
// - `[name]: value`: Ini adalah *computed property name*. Bagian ini secara dinamis memperbarui *key* yang sesuai. Jika pengguna mengetik di *input* dengan `name="author"`, maka baris ini akan menjadi `author: value`, dan hanya properti `author` di dalam *state* `form` yang akan diperbarui.

// ### Mengirim Data ke Server saat Form Submit

// Setelah pengguna mengisi form dan mengklik tombol "Save", kita perlu mengambil data dari *state* `form`, mengirimkannya ke server, dan menangani hasilnya.

// Tambahkan fungsi `onSubmit` di bawah `handleOnChange`:

// ```jsx
// const onSubmit = async (event) => {
//         event.preventDefault(); // Mencegah reload halaman
//         try {
//             setIsLoading(true);

//             // Kirim data 'form' ke endpoint '/quotes'
//             const response = await http.post("/quotes", form);

//             // Jika sukses (status 201 Created)
//             if (response.status === 201) {
//                 // Arahkan kembali ke halaman utama
//             }
//         } catch (error) {
//             console.error("Gagal menambahkan quote:", error);
//         } finally {
//             setIsLoading(false);
//         }
//     }
// ```

// ### **Penjelasan Kode:**

// - `event.preventDefault()`: Langkah pertama dan paling penting dalam fungsi *submit* form. Ini mencegah perilaku *default* *browser* yang akan me-*reload* halaman.
// - `try...catch...finally`: Sama seperti pada fungsi hapus, kita menggunakan blok ini untuk menangani panggilan API dengan aman.
// - `setIsLoading(true)`: Memberi tahu aplikasi kita untuk masuk ke mode *loading*.
// - `await http.post("/quotes", form)`: Kita mengirim permintaan HTTP `POST` ke *endpoint* `/quotes`. Argumen kedua, `form`, adalah *payload* atau data yang kita kirim.
// - `if (response.status === 201)`: Status `201 Created` adalah respons standar dari server yang menandakan bahwa sumber daya baru telah berhasil dibuat.

// ### Tampilan Form Create New Quote

// Terakhir, mari kita bangun elemen visualnya. Kita akan menggunakan tag `<form>` dan komponen `<Input>` serta `<Button>` kita.

// Ganti bagian `return` dari komponen Anda dengan kode JSX berikut:

// ```jsx
// return (
//         <div className="container mx-auto">
//             <form onSubmit={onSubmit}>
//                 <div className="space-y-3">
//                     <Input id={useId()} name="quote" value={form.quote} onChange={handleOnChange} label="Quote" placeholder="Isi kutipan..." />
//                     <Input id={useId()} name="author" value={form.author} onChange={handleOnChange} label="Author" placeholder="Nama penulis..." />
//                     <Input id={useId()} name="year" type="number" value={form.year} onChange={handleOnChange} label="Year" placeholder="Tahun..." />
//                     <Input id={useId()} name="category" value={form.category} onChange={handleOnChange} label="Category" placeholder="Kategori..." />
//                     <Input id={useId()} name="source" value={form.source} onChange={handleOnChange} label="Source" placeholder="Sumber kutipan..." />
                    
//                     <Button type="submit" disabled={isLoading}>
//                         {isLoading ? "Saving..." : "Save"}
//                     </Button>
//                 </div>
//             </form>
//         </div>
//     )
// ```

// ### **Penjelasan Kode:**

// - `<form onSubmit={onSubmit}>`: Kita menghubungkan fungsi `onSubmit` kita ke *event* `onSubmit` dari form. Ini akan terpanggil ketika tombol dengan `type="submit"` di dalamnya diklik.
// - **Props pada Komponen `<Input>`**:
//     - `name="quote"`: Atribut `name` ini **harus cocok** dengan *key* di *state* `form` kita. Inilah yang membuat fungsi `handleOnChange` kita bekerja.
//     - `value={form.quote}`: Kita mengikat nilai *input* ke *state* kita. Ini menjadikannya **Controlled Component**, di mana React sepenuhnya mengontrol data form.
//     - `onChange={handleOnChange}`: Setiap kali pengguna mengetik, fungsi `handleOnChange` akan dipanggil.
// - **Logika pada Komponen `<Button>`**:
//     - `disabled={isLoading}`: Tombol akan dinonaktifkan jika `isLoading` bernilai `true`. Ini mencegah pengguna mengklik tombol berkali-kali saat data sedang diproses.
//     - `{isLoading ? "Saving..." : "Save"}`: Teks di dalam tombol akan berubah secara dinamis berdasarkan *state* `isLoading`. Ini adalah umpan balik visual yang jelas bagi pengguna.

// ### Kode Lengkap CreateNewQuote.jsx

// ```jsx
// import http from "@api/apiClient";
// import Button from "@components/ui/Button";
// import Input from "@components/ui/Input";
// import { useId, useState } from "react";
// import { useNavigate } from "react-router";

// export default function CreateNewQuote() {
//     const navigation = useNavigate()
//     const [isLoading, setIsLoading] = useState(false)
//     const [form, setForm] = useState({
//         quote: "",
//         author: "",
//         year: "",
//         category: "",
//         source: ""
//     })

//     const handleOnChange = (event) => {
//         const { name, value } = event.target

//         setForm({
//             ...form,
//             [name]: value
//         })
//     }

//     const onSubmit = async (event) => {
//         event.preventDefault()
//         try {
//             setIsLoading(true)

//             const response = await http.post("/quotes", form)

//             if (response.status === 201) {
//                 navigation("/", {
//                     replace: true
//                 })
//             }
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     return <div className="container mx-auto">
//         <form onSubmit={onSubmit}>
//             <div className="space-y-3">
//                 <Input id={useId()} name="quote" value={form.quote} onChange={handleOnChange} label="Quote" placeholder="Quote" />
//                 <Input id={useId()} name="author" value={form.author} onChange={handleOnChange} label="Author" placeholder="Author" />
//                 <Input id={useId()} name="year" type="number" value={form.year} onChange={handleOnChange} label="Year" placeholder="Year" />
//                 <Input id={useId()} name="category" value={form.category} onChange={handleOnChange} label="Category" placeholder="Category" />
//                 <Input id={useId()} name="source" value={form.source} onChange={handleOnChange} label="Source" placeholder="Source" />
//                 <Button type="submit" disabled={isLoading}>
//                     {isLoading ? "Saving..." : "Save"}
//                 </Button>
//             </div>
//         </form>
//     </div>
// }
// ```

// ### Uji Coba

// Buka kembali file `main.jsx` dan ganti component `Quote.jsx` dengan `CreateQuote.jsx` 

// ### Update Quote

// Apa saja persamaan antara form untuk membuat quote baru dan form untuk memperbarui kutipan yang sudah ada?

// - Keduanya memerlukan **kolom input yang sama** (quote, author, year, dll.).
// - Keduanya memerlukan **state management** untuk menangani nilai input (`form`) dan status loading (`isLoading`).
// - Keduanya memiliki **tombol "Save"** atau "Update" untuk mengirim data ke server.
// - Keduanya memerlukan **logika pengiriman data** (API call).

// Perbedaan utamanya hanya satu: **Form Update harus mengambil (fetch) data yang ada terlebih dahulu dan mengisikannya ke dalam kolom input.**

// > Agar kita tidak mengulang mengedit file `UpdateQuote.jsx` kita akan lewati dulu dan melanjutkan ke `react router` terlebih dahulu
// > 

// ### Component `UpdateQuote.jsx` (Jika sudah selesai dengan react-router)

// 1. Langkah 1: Mengambil ID dari URL dengan `useParams`
    
//     Hal pertama yang harus diketahui oleh komponen kita adalah, "Kutipan mana yang harus saya edit?". Informasi ini kita dapatkan dari URL dinamis yang telah kita buat (`/update-quote/:id`).
    
//     **Buka file `src/pages/quotes/UpdateQuote.jsx`** 
    
//     ```jsx
//     import { ..., useParams } from "react-router-dom"; // Pastikan useParams diimpor
    
//     export default function UpdateQuote() {
//         const params = useParams(); // Mengambil parameter dari URL
//         const navigation = useNavigate();
//         // ...
//     ```
    
//     **Penjelasan:**
    
//     - **`useParams()`**: Ini adalah *hook* dari React Router yang sangat berguna. Ia membaca URL saat ini dan memberikan kita sebuah objek yang berisi parameter dinamisnya.
//     - Jika pengguna mengunjungi `/update-quote/123`, maka `useParams()` akan mengembalikan `{ id: "123" }`. Kita menyimpannya di dalam konstanta `params` untuk digunakan nanti.
// 2. Langkah 2: Mengambil Data & Mengisi Form secara Otomatis
    
//     Setelah kita mendapatkan `id`, kita perlu mengambil data kutipan yang sesuai dari server segera setelah komponen dimuat. Ini adalah pekerjaan yang sempurna untuk *hook* `useEffect`.
    
//     Tambahkan kode berikut untuk mengambil data:
    
//     ```jsx
//     // ... setelah state ...
    
//     const fetchQuote = useCallback(async () => {
//       try {
//         const response = await http.get(`/quotes/${params.id}`);
//         // Isi state form dengan data dari server
//         setForm(response.data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }, [params.id]); // <-- dependensi
    
//     useEffect(() => {
//       // Jalankan fungsi fetchQuote saat komponen pertama kali dimuat
//       fetchQuote();
//     }, [fetchQuote]);
//     ```
    
//     **Penjelasan:**
    
//     - **`useEffect(() => { ... }, [fetchQuote])`**: *Hook* ini akan menjalankan fungsi di dalamnya setelah komponen selesai di-render. Karena dependensinya `[fetchQuote]`, ini hanya akan berjalan sekali saat komponen pertama kali muncul di layar.
//     - **`fetchQuote = useCallback(async () => { ... })`**:
//         - Kita membungkus logika *fetch* kita dalam `useCallback` untuk optimisasi. Ini memastikan fungsi `fetchQuote` tidak dibuat ulang di setiap render, kecuali `params.id` berubah.
//         - Di dalamnya, kita melakukan request `http.get` ke *endpoint* yang spesifik, menggunakan `params.id` yang sudah kita dapatkan.
//         - **`setForm(response.data.data)`**: Inilah bagian ajaibnya! Setelah berhasil mendapatkan data, kita langsung memperbarui *state* `form` kita. Karena semua `<Input>` kita terikat pada *state* ini, form akan **otomatis terisi** dengan data kutipan yang ada.
// 3. Langkah 3: Menyesuaikan Fungsi `onSubmit` untuk Mengirim Update
    
//     Logika untuk mengirim form hampir sama dengan saat membuat kutipan baru, tetapi dengan dua perbedaan utama: kita menggunakan metode `http.put` dan menyertakan `id` di URL.
    
//     Perbarui fungsi `onSubmit` Anda menjadi seperti ini:
    
//     ```jsx
//     const onSubmit = async (event) => {
//       event.preventDefault();
//       try {
//         setIsLoading(true);
    
//         // Gunakan http.put dan sertakan params.id di URL
//         const response = await http.put(`/quotes/${params.id}`, form);
    
//         // Status sukses untuk update biasanya 200 OK
//         if (response.status === 200) {
//           navigation("/", {
//             replace: true,
//           });
//         }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     ```
    
//     **Penjelasan:**
    
//     - **`http.put(`/quotes/${params.id}`, form)`**:
//         - Kita menggunakan metode **`PUT`**, yang merupakan standar HTTP untuk **memperbarui** sumber daya yang ada secara keseluruhan.
//         - Kita kembali menggunakan `params.id` untuk memberi tahu server secara spesifik kutipan mana yang harus diperbarui.
//         - `form` tetap menjadi *payload* atau data yang kita kirim.
//     - **`if (response.status === 200)`**: Kode status HTTP untuk pembaruan yang berhasil biasanya adalah **`200 OK`**, berbeda dengan `201 Created` saat membuat data baru.

// ### Kode Lengkap `UpdateQuote.jsx`

// ```jsx
// import http from "@api/apiClient";
// import Button from "@components/ui/Button";
// import Input from "@components/ui/Input";
// import { useCallback, useEffect, useId, useState } from "react";
// import { useNavigate, useParams } from "react-router";

// export default function UpdateQuote() {
//   const params = useParams();

//   const navigation = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [form, setForm] = useState({
//     quote: "",
//     author: "",
//     year: "",
//     category: "",
//     source: "",
//   });

//   const fetchQuote = useCallback(async () => {
//     try {
//       const response = await http.get(`/quotes/${params.id}`);

//       setForm(response.data.data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [params]);

//   useEffect(() => {
//     fetchQuote();
//   }, [fetchQuote]);

//   const handleOnChange = (event) => {
//     const { name, value } = event.target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       setIsLoading(true);

//       const response = await http.put(`/quotes/${params.id}`, form);

//       if (response.status === 200) {
//         navigation("/", {
//           replace: true,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto">
//       <form onSubmit={onSubmit}>
//         <div className="space-y-3">
//           <Input
//             id={useId()}
//             name="quote"
//             value={form.quote}
//             onChange={handleOnChange}
//             label="Quote"
//             placeholder="Quote"
//           />
//           <Input
//             id={useId()}
//             name="author"
//             value={form.author}
//             onChange={handleOnChange}
//             label="Author"
//             placeholder="Author"
//           />
//           <Input
//             id={useId()}
//             name="year"
//             type="number"
//             value={form.year}
//             onChange={handleOnChange}
//             label="Year"
//             placeholder="Year"
//           />
//           <Input
//             id={useId()}
//             name="category"
//             value={form.category}
//             onChange={handleOnChange}
//             label="Category"
//             placeholder="Category"
//           />
//           <Input
//             id={useId()}
//             name="source"
//             value={form.source}
//             onChange={handleOnChange}
//             label="Source"
//             placeholder="Source"
//           />
//           <Button type="submit" disabled={isLoading}>
//             {isLoading ? "Saving..." : "Save"}
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }
// ```

// ## React Router

// Setiap aplikasi web yang memiliki lebih dari satu halaman memerlukan sistem navigasi atau *routing*. Di React, pustaka standar yang menjadi andalan untuk tugas ini adalah **React Router**.

// ### Install React Router

// https://reactrouter.com/start/data/installation

// Prosesnya sangat mudah. Ikuti langkah-langkah berikut:

// - **Buka Terminal Anda**: Buka *command prompt* (CMD), Terminal, atau terminal  yang ada di VS Code.
// - **Arahkan ke Direktori Proyek**: Pastikan Anda sudah berada di dalam folder utama (root) dari proyek React. Kamu akan melihat file seperti `package.json` dan folder `src` di sana.
// - **Jalankan Perintah**: Ketik atau copas perintah berikut, lalu tekan enter.

// ```bash
// npm i react-router
// ```

// ### Struktur Folder

// Pertama, kita akan membuat sebuah folder khusus untuk semua hal yang berkaitan dengan navigasi.

// - Di dalam direktori utama projek, cari dan buka folder `src`.
// - Buatlah sebuah **folder baru** di dalam `src` dan berikan nama **`routes`**.

// Sekarang, di dalam folder `routes` yang baru saja kita buat, kita akan menambahkan file utama yang akan berisi semua logika *routing* dengan nama `router.js`dengan nama `router.js`

// Struktur folder sekarang akan terlihat seperti ini:

// ```jsx
// ┣ 📂api
// ┃ ┗ 📜apiClient.js
// ┣ 📂assets
// ┃ ┣ 📂css
// ┃ ┃ ┗ 📜style.css
// ┃ ┗ 📜react.svg
// ┣ 📂components
// ┃ ┗ 📂ui
// ┃   ┣ 📜Button.jsx
// ┃   ┗ 📜Input.jsx
// ┣ 📂pages
// ┃ ┣ 📂articles
// ┃ ┃ ┣ 📜Articles.jsx
// ┃ ┃ ┗ 📜WelcomeArticle.jsx
// ┃ ┗ 📂quotes
// ┃   ┣ 📜CreateQuote.jsx
// ┃   ┣ 📜Quote.jsx
// ┃   ┗ 📜UpdateQuote.jsx
// **┣ 📂routes
// ┃ ┗ 📜router.js**
// ┗ 📜main.jsx
// ```

// ### Membuat Routing

// Di React Router, ada dua cara utama tentang bagaimana sebuah halaman atau komponen dimuat saat pengguna mengunjungi sebuah URL. Memahami perbedaannya sangat penting untuk membangun aplikasi yang cepat dan efisien.

// 1. Pemuatan Standar (Eager Loading)

// Ini adalah pendekatan yang paling dasar. 

// - **Cara Kerja:** Seluruh kode untuk semua halaman (komponen) yang Anda daftarkan di router akan digabungkan menjadi satu file JavaScript besar dan diunduh oleh browser pengguna saat pertama kali membuka aplikasi.
// - **Kelemahan:** Jika aplikasi Anda memiliki banyak halaman, waktu muat awal bisa menjadi sangat lambat. Pengguna dipaksa mengunduh kode untuk halaman "Profil" atau "Pengaturan" padahal mereka mungkin hanya ingin melihat halaman "Beranda". Ini tidak efisien dan membuang-buang data.
// 1. Pemuatan Malas (Lazy Loading)

// Ini adalah pendekatan modern dan jauh lebih efisien.

// - **Cara Kerja:** React Router hanya akan mengunduh kode untuk halaman yang sedang diakses oleh pengguna. Jika pengguna membuka halaman "Beranda", hanya kode untuk "Beranda" yang diunduh. Kode untuk halaman lain akan menunggu hingga benar-benar dibutuhkan.
// - **Keuntungan:** Waktu muat awal aplikasi menjadi **jauh lebih cepat**, karena browser hanya perlu mengunduh sebagian kecil kode yang diperlukan. Ini memberikan pengalaman pengguna (UX) yang jauh lebih baik, terutama bagi mereka yang memiliki koneksi internet lambat.

// Meskipun pemuatan standar lebih mudah dipahami pada awalnya, membiasakan diri dengan **Lazy Loading** sejak awal akan membuat kamu menjadi developer yang lebih baik.

// Karena itu, dalam tutorial ini, kita akan **langsung menggunakan pendekatan Lazy Loading** untuk semua rute kita.

// ### Router.js

// Di dalam file router.js, kita akan membuat sebuah "peta" yang memberitahu React Router komponen mana yang harus ditampilkan untuk setiap alamat URL.

// Buka file `src/routes/router.js` Anda dan masukkan kode berikut. Kode ini mendefinisikan tiga rute utama untuk aplikasi kutipan kita.

// ```jsx
// // File: src/routes/router.js

// import { createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//     // Rute 1: Halaman Utama (Daftar Kutipan)
//     {
//         path: "/",
//         lazy: {
//             Component: async () => {
//                 const component = await import("../pages/quotes/Quote")

//                 return component.default
//             }
//         }
//     },
//     // Rute 2: Halaman untuk Membuat Kutipan Baru
//     {
//         path: "/new-quote",
//         lazy: {
//             Component: async () => {
//                 const component = await import("../pages/quotes/CreateQuote")

//                 return component.default
//             }
//         }
//     },
//     // Rute 3: Halaman untuk Memperbarui Kutipan (dengan ID dinamis)
//     {
//         path: "/update-quote/:id", // Ini adalah cara menggunakan parameter
//         lazy: {
//             Component: async () => {
//                 const component = await import("../pages/quotes/UpdateQuote")

//                 return component.default
//             }
//         }
//     },
// ]);

// export default router;
// ```

// ### Penjelasan Kode

// - **`createBrowserRouter([...])`**: Fungsi ini membuat router untuk aplikasi. Ia menerima sebuah array, di mana setiap elemen di dalamnya adalah sebuah **objek rute**.
// - **Objek Rute**: Setiap objek `{...}` memetakan sebuah URL ke sebuah komponen.
//     - `path`: String yang mendefinisikan **URL** di browser.
//     - `lazy`: Fungsi yang akan dieksekusi **hanya saat `path` tersebut diakses**. Ini membuat aplikasi lebih cepat karena tidak semua kode halaman dimuat di awal.
// - **`await import(...)`**: Ini adalah perintah untuk **mengunduh file komponen secara dinamis** saat dibutuhkan. `.default` digunakan untuk mengambil komponen React dari file tersebut.
// - **`path: "/update-quote/:id"`**: Tanda `:id` adalah **parameter dinamis**. Artinya, URL seperti `/update-quote/123` akan cocok, dan `123` bisa kita gunakan sebagai ID di dalam komponen.

// > Dikelas ini sepertinya tidak cukup untuk membahas lebih dalam tentang react router ini, seperti middleware, loader, action, layouting (dengan outlet), pending UI, dll. Kalau mau kita bisa dikusi di luar kelas
// > 

// ### Menggunakan Router.js

// Sekarang, kita akan menghubungkan konfigurasi router tersebut ke titik masuk utama aplikasi kita, yaitu file `main.jsx`.

// Silakan ganti seluruh isi file `main.jsx` kamu dengan kode berikut:

// ```jsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "@css/style.css";
// import { RouterProvider } from "react-router";
// import router from "./routes/router";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// );
// ```

// ### Penjelasan Kode

// - **`import router from "./routes/router";`**
// Kita mengimpor objek `router` yang telah kita konfigurasi menggunakan `createBrowserRouter` di file sebelumnya. Ini adalah "peta" navigasi kita.
// - **`import { RouterProvider } from "react-router";`** adalah komponen khusus dari React Router.
// - **`<RouterProvider router={router} />`**
// Inilah perubahan kuncinya. Dari pada me-render komponen `<Quote />,<CreateQuote/>, <UpdateQuote/>` secara langsung, kita sekarang me-render `<RouterProvider>`.
//     - Kita memberikan konfigurasi rute kita ke komponen ini melalui *prop* bernama `router`.
//     - `RouterProvider` kemudian akan membaca URL saat ini dan secara otomatis me-render komponen yang sesuai dengan `path` yang telah kita definisikan di `router.js`.

// ### Uji Coba Routing

// ### Membuat Link Navigasi di Halaman Utama (`Quote.jsx`)

// Tujuan kita adalah menambahkan sebuah link "Create New Quote" di halaman yang menampilkan semua daftar kutipan.

// Buka file `src/pages/quotes/Quote.jsx`

// 1. Impor Komponen `NavLink`
// Di bagian paling atas file, tambahkan impor berikut dari `react-router-dom`.
    
//     ```jsx
//     import { NavLink } from "react-router-dom";
//     ```
    
//     > Penjelasan: NavLink adalah komponen spesial dari React Router yang berfungsi seperti tag <a> pada HTML biasa. Kelebihannya, NavLink tidak akan menyebabkan refresh pada seluruh halaman
//     > 
// 2. Tambahkan Link ke dalam JSX
    
//     ```jsx
//     <div className="flex justify-between items-center mb-4">
//         <h1 className="font-semibold text-2xl">Quotes</h1>
//         <NavLink 
//             to="/new-quote" 
//             className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
//         >
//             Create New Quote
//         </NavLink>
//     </div>
//     ```
    
//     **Penjelasan:**
    
//     - **`<NavLink>`**: Kita menggunakan komponen yang baru saja diimpor.
//     - **`to="/new-quote"`**: *Prop* `to` ini adalah bagian terpenting. Ini memberitahu React Router untuk menavigasi ke *path* `/new-quote` ketika link ini diklik. Alamat ini harus cocok dengan salah satu `path` yang telah kita daftarkan di file `router.js`.
// 3. Navigasi `Quotes.jsx` ke `UpdateQuote.jsx` 
    
//     Tambahkan baris ini setelah button delete
    
//     ```jsx
//     <div className="mt-5">
//       <Button onClick={() => deleteQuote(quote.id)}>Hapus</Button>
//       <NavLink to={`/update-quote/${quote.id}`}>Update</NavLink>
//     </div>;
//     ```
    

// ### Redirect Otomatis Setelah Submit Form (`CreateQuote.jsx`)

// Setelah pengguna menekan tombol "Save" dan kutipan berhasil dibuat, tentu akan lebih baik jika mereka langsung diarahkan kembali ke halaman utama untuk melihat kutipan baru mereka, daripada hanya diam di halaman form yang sudah kosong.

// 1. Buka file `src/pages/quotes/CreateQuote.jsx`

// Di bagian atas file, tambahkan `useNavigate` ke dalam daftar impor Anda.

// ```jsx
// import { useNavigate } from "react-router-dom";
// ```

// 1. Inisialisasi Hook di Dalam Component

// ```jsx
// export default function CreateNewQuote() {
//     const navigation = useNavigate();
//     const [isLoading, setIsLoading] = useState(false);
//     // ... sisa kode state Anda
// ```

// 1. Panggil Navigasi di Dalam Fungsi `onSubmit`
    
//     Di dalam blok `if` yang menandakan bahwa data berhasil dikirim, panggil fungsi `navigation`.
    
//     ```jsx
//     const onSubmit = async (event) => {
//       event.preventDefault();
//       try {
//         setIsLoading(true);
//         const response = await http.post("/quotes", form);
    
//         if (response.status === 201) {
//           // Arahkan pengguna ke halaman utama
//           navigation("/", {
//             replace: true,
//           });
//         }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     ```

import axios from "axios";

// Membuat instance Axios dengan konfigurasi default
const apiClient = axios.create({
    // URL dasar untuk semua permintaan ke API kita
    baseURL: 'http://127.0.0.1:8000/api', 
    // Header default yang akan dikirim pada setiap permintaan
    headers: {
        "Accept": "application/json"
    }
});

export default apiClient;