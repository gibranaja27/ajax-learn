document.addEventListener("DOMContentLoaded", function () {
  // Menggunakan AJAX untuk bisa memuat data yang ada di file data.JSON
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      // Menampilkan informasi toko
      document.getElementById("nama_toko").innerHTML =
        "<strong>Nama Toko:</strong> " + data.nama_toko;
      document.getElementById("pengarang").innerHTML =
        "<strong>Pengarang:</strong> " + data.pengarang;
      document.getElementById("alamat").innerHTML =
        "<strong>Alamat:</strong> " + data.alamat;

      // Menampilkan koleksi buku yang dimasukkan kedalam tabel
      var tbody = document.getElementById("tbody_buku");
      data.koleksi_buku.forEach(function (buku) {
        var row =
          "<tr><td>" +
          buku.judul +
          "</td><td>" +
          buku.pengarang +
          "</td><td>" +
          buku.tahun_terbit +
          "</td></tr>";
        tbody.innerHTML += row;
      });
    }
  };
  xhr.open("GET", "data.json", true);
  xhr.send();
});
