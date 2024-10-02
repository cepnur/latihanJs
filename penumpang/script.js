var penumpang = [];
var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    //tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    //kebalikan isi array dan keluar dari function
    return penumpang;
  } else {
    //else
    //telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        //tambah penumpang dikursi tersebut
        penumpang[i] = namaPenumpang;
        //kembalikan isi array dan keluar dari funnction
        return penumpang;
      }
      //jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang) {
        //tampilkan pesan kesalahanya
        console.log(namaPenumpang + " sudah ada dalam angkot");
        //kembalikan isi array dan keluar dari fungsi
        return penumpang;
      }
      //jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang diakhir array
        penumpang.push(namaPenumpang);
        //kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika penumpang kosong
  if (penumpang.length == 0) {
    console.log("angkot kosong");
    return penumpang;
  } else {
    //telusuri seluruh kursi
    for (var i = 0; i < penumpang.length; i++) {
      //jika ada penumpang yang sesuai namanya
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // jika tidak ada nama penumpang
        console.log(namaPenumpang + " tidak ada didalam angkot");
        return penumpang;
      }
    }
  }
};
