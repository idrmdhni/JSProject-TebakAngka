var tanya = true;

while (tanya) {
  // Menangkap pilihan komputer
  // Membangkitkan bilangan random antara 1 - 10
  var comp = Math.round(Math.random() * 10);
  while (comp == 0) {
    var comp = Math.round(Math.random() * 10);
  }

  // Mekanisme game
  for (var nyawa = 1; nyawa <= 3; nyawa++) {
    // Menangkap pilihan player
    var player = parseInt(
      prompt(
        "Selamat datang di game Tebak Angka, silahkan masukkan angka antara 1 sampai 10 " +
          "(anda memiliki " +
          (4 - nyawa) +
          " nyawa tersisa)."
      )
    );

    // Menentukan aturan()
    if (player == comp) {
      alert("Selamat anda berhasil menebak dengan benar!");
      break;
    } else {
      if (comp - player > 0 && comp - player <= 3) {
        alert("Sedikit lagi");
      } else if (comp - player > 3 && comp - player <= 6) {
        alert("Masih jauh");
      } else if (comp - player < 0 && comp - player >= -3) {
        alert("Sedikit lagi");
      } else if (comp - player < -3 && comp - player >= -6) {
        alert("Masih jauh");
      } else if (
        (comp - player > 6 && comp - player <= 9) ||
        (comp - player < -6 && comp - player >= -9)
      ) {
        alert("Terlalu jauh");
      } else {
        alert("Input yang anda masukkan salah!");
      }
    }
  }

  //Notifikasi gagal
  if (player != comp) {
    alert(
      "Nyawa anda habis, anda gagal menebak angka.\nJawaban yang benar adalah: " +
        comp
    );
  }

  // Menanyakan ulang
  tanya = confirm("Lagi?");
}
