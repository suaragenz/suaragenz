# suaraGenZ — Website Berita

Website statis responsif untuk suaraGenZ. Bisa di-host gratis di Cloudflare Pages, Netlify, atau GitHub Pages.

## File
- `index.html` — struktur dan konten halaman
- `styles.css` — desain responsif
- `script.js` — menu mobile, tanggal, WhatsApp, dan formulir
- `assets/favicon.svg` — ikon tab browser

## Sebelum dipublikasikan
1. Buka `script.js`.
2. Ganti `whatsappNumber: "6281234567890"` dengan nomor WhatsApp resmi (format internasional, tanpa `+`, spasi, atau tanda hubung).
3. Ganti `editorialEmail: "redaksi@contoh.com"` dengan alamat email aktif.
4. Ubah contoh artikel di `index.html` menjadi artikel asli. Konten saat ini adalah contoh/demo, bukan berita aktual.
5. Periksa semua tautan, identitas redaksi, dan kebijakan privasi/koreksi yang ingin ditambahkan.

## Publikasi gratis dengan Cloudflare Pages (unggah file)
1. Ekstrak ZIP ini di komputer.
2. Masuk/daftar ke https://dash.cloudflare.com/
3. Buka **Workers & Pages** → **Create** → **Pages** (label menu bisa berubah).
4. Pilih opsi unggah aset statis / **Direct Upload** jika tersedia.
5. Beri nama proyek, misalnya `suaragenz`, lalu unggah folder hasil ekstrak atau ZIP sesuai petunjuk dashboard.
6. Selesaikan deploy. Cloudflare akan memberi subdomain seperti `suaragenz.pages.dev`.
7. Buka alamat itu dan uji di HP serta laptop.

Jika dashboard tidak menawarkan Direct Upload, hubungkan repository GitHub dan deploy dari repository. Alternatif: Netlify Drop di https://app.netlify.com/drop/ (opsi dan antarmuka dapat berubah).

## Penting tentang formulir
Formulir versi ini menggunakan `mailto:`: setelah alamat email diganti, tombol akan membuka aplikasi email pengunjung yang tersedia. Pengunjung masih perlu menekan tombol Kirim di aplikasi email mereka. Ini bukan sistem penyimpanan pesan di server.
Jika ingin pesan tersimpan/diterima otomatis tanpa aplikasi email, hubungkan form dengan layanan form backend pihak ketiga seperti Formspree atau Netlify Forms, lalu sesuaikan HTML sesuai instruksi layanan. Periksa batas gratis dan kebijakan privasinya sebelum digunakan.

## Domain
Hosting gratis biasanya memberi subdomain seperti `suaragenz.pages.dev` atau `nama.netlify.app`. Domain khusus `.com` biasanya berbayar. Ketersediaan nama subdomain bergantung pada apakah nama itu masih tersedia.
