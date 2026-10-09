# Accessible Campus Website - UNTAG Surabaya

Final Challenge mata kuliah Pemrograman Web: website kampus yang dirancang aksesibel berdasarkan **WCAG 2.2**.

**Demo:** https://syahied204-crypto.github.io/untag-accessible/

> Catatan: data pada website ini sebagian merupakan contoh untuk keperluan tugas.

## Halaman

- [x] Beranda (`index.html`)
- [x] Profil Kampus (`profil.html`)
- [x] Informasi Akademik (`akademik.html`)
- [x] Berita dan Pengumuman (`berita.html`)
- [ ] Kontak (`kontak.html`)

## Fitur Aksesibilitas

- Skip link "Lewati ke konten utama" di setiap halaman
- Struktur semantik: `header`, `nav`, `main`, `footer`, dan heading berurutan
- Penanda halaman aktif pada menu dengan `aria-current="page"`
- Indikator fokus keyboard yang jelas (garis oranye)
- Tabel dengan `caption` dan atribut `scope` (halaman Akademik)
- Area tabel dapat digulir dan difokus dengan keyboard
- Filter berita dengan tombol yang dapat dioperasikan keyboard (`aria-pressed`) dan jumlah hasil diumumkan lewat `role="status"`
- Tata letak responsif untuk layar kecil

## Teknologi

- HTML5
- CSS3
- JavaScript (native)
- Git dan GitHub Pages

## Struktur Folder

```
untag-accessible/
├── index.html
├── profil.html
├── akademik.html
├── berita.html
├── kontak.html
├── style.css
└── README.md
```

## Menjalankan di Komputer

1. Clone repositori ini atau unduh sebagai ZIP.
2. Buka folder di VS Code.
3. Jalankan `index.html` dengan ekstensi Live Server, atau buka langsung di browser.

## Pengujian

Pengujian dilakukan dengan keyboard, Device Toolbar Google Chrome, axe DevTools, Lighthouse, dan WAVE. Hasilnya dicantumkan di laporan.

## Pembuat

**Ash Syahied Shiddiq** (1462200054)
Program Studi Teknik Informatika
Universitas 17 Agustus 1945 Surabaya