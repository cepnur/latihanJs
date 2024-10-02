var tanya = true;
while (tanya) {
  //menangkap pilihan player
  var p = prompt("pilih : gajah, semut, orang");
  //menangkap pilihan computer

  //membangkitkan bilangan random
  var com = Math.random();
  if (com < 0.34) {
    com = "gajah";
  } else if (com >= 0.34 && com < 0.67) {
    com = "orang";
  } else {
    com = "semut";
  }

  var hasil = "";
  //menentukan rules
  if (p == com) {
    hasil = "seri";
  } else if (p == "gajah") {
    hasil = com == "orang" ? "menang!" : "kalah!";
  } else if (p == "orang") {
    hasil = com == "gajah" ? "kalah!" : "menang!";
  } else if (p == "semut") {
    hasil = com == "orang" ? "kalah!" : "menang!";
  } else {
    hasil = "masukan pilihan yang benar!";
  }

  //tampilkan hasilnya
  alert("kamu memilih : " + p + " dan komputer memilih : " + com + "\nmaka hasilnya : " + hasil);

  tanya = confirm("coba lagi?");
}

alert("terimakasih sudah bermain");
