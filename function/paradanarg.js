// //parameter
// function tambah(a, b) {
//   return a + b;
// }

// function kali(a, b) {
//   return a * b;
// }

// //argument
// var hasil = kali(tambah(1, 2), tambah(3, 5));
// console.log(hasil);

function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var coba = tambah(1, 2, 3, 4);
console.log(coba);
