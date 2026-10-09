const tombolFilter = document.querySelectorAll('.tombol-filter');
const kartuBerita = document.querySelectorAll('.kartu-berita');
const statusFilter = document.getElementById('status-filter');

tombolFilter.forEach(function (tombol) {
  tombol.addEventListener('click', function () {
    const kategori = tombol.dataset.filter;
    let jumlah = 0;

    tombolFilter.forEach(function (t) {
      t.setAttribute('aria-pressed', t === tombol ? 'true' : 'false');
    });

    kartuBerita.forEach(function (kartu) {
      const cocok = kategori === 'semua' || kartu.dataset.kategori === kategori;
      kartu.hidden = !cocok;
      if (cocok) {
        jumlah++;
      }
    });

    statusFilter.textContent =
      'Menampilkan ' + jumlah + ' dari ' + kartuBerita.length + ' berita.';
  });
});