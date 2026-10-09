const form = document.getElementById('form-kontak');
const ringkasan = document.getElementById('ringkasan-error');
const statusForm = document.getElementById('status-form');

const aturan = [
  {
    id: 'nama',
    label: 'Nama lengkap',
    cek: function (nilai) {
      return nilai.trim() === '' ? 'Nama lengkap wajib diisi.' : '';
    }
  },
  {
    id: 'email',
    label: 'Alamat email',
    cek: function (nilai) {
      if (nilai.trim() === '') {
        return 'Alamat email wajib diisi.';
      }
      const pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pola.test(nilai.trim())
        ? ''
        : 'Format email tidak valid. Contoh: nama@email.com.';
    }
  },
  {
    id: 'pesan',
    label: 'Pesan',
    cek: function (nilai) {
      return nilai.trim().length < 10
        ? 'Pesan wajib diisi, minimal 10 karakter.'
        : '';
    }
  }
];

function bersihkanError() {
  aturan.forEach(function (a) {
    const input = document.getElementById(a.id);
    input.removeAttribute('aria-invalid');
    document.getElementById('error-' + a.id).textContent = '';
  });
  ringkasan.hidden = true;
  ringkasan.innerHTML = '';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  bersihkanError();
  statusForm.textContent = '';

  const daftarError = [];

  aturan.forEach(function (a) {
    const input = document.getElementById(a.id);
    const pesanError = a.cek(input.value);
    if (pesanError) {
      input.setAttribute('aria-invalid', 'true');
      document.getElementById('error-' + a.id).textContent = pesanError;
      daftarError.push({ id: a.id, pesan: pesanError });
    }
  });

  if (daftarError.length > 0) {
    let html = '<h3>Ada ' + daftarError.length + ' kesalahan pada formulir</h3><ul>';
    daftarError.forEach(function (e) {
      html += '<li><a href="#' + e.id + '">' + e.pesan + '</a></li>';
    });
    html += '</ul>';
    ringkasan.innerHTML = html;
    ringkasan.hidden = false;
    ringkasan.focus();
    return;
  }

  form.reset();
  statusForm.textContent = 'Terima kasih. Pesan Anda sudah diterima (demo, tidak dikirim ke server).';
});