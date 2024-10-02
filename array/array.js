// var arr = ["cepnur", "tobi", "rival", "gugun"];

// for (i = 0; i < arr.length; i++) {
//   console.log("mahasiswa ke " + (i + 1) + " " + arr[i]);
// }

//method pada array
//1. join = merubah isi array menjadi string
// var arr = ["cepnur", "tobi", "rival", "gugun"];
// console.log(arr.join("-"));

// 2.push = menambah elemen diakhir
// arr.push('zaky');

//3. pop = menghapus elemen terakhir
// arr.pop();

// 4. unshift & shift = menambah elemen di awal
// arr.shift();

// var arr = ["cepnur", "tobi", "rival", "gugun"];
// //splice untuk menyambung array
// arr.splice(2, 0, "dody");
// console.log(arr.join());

// slice untuk memotong array
// var arr = ["cepnur", "tobi", "rival", "gugun"];
// var arr2 = arr.slice(1, 4);
// console.log(arr.join("-"));
// console.log(arr2.join("-"));

//5. foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// angka.forEach(function (e) {
//   console.log(e);
// });
// var nama = ["sandi", "cepnur", "ramli", "gusti"];

// nama.forEach(function (e, i) {
//   console.log("mahasiswa ke - " + (i + 1) + " adalah : " + e);
// });

//6. map hampir sama dengan foreach
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var angka2 = angka.map(function (e) {
//   return e * 2;
// });
// console.log(angka2.join("-"));

//7. sort untuk mengurutkan
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join("-"));

// 8. filter untuk mencari nilai pada array
// var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var angka2 = angka.filter(function (x) {
//   return x > 5;
// });
// console.log(angka2.join());

// 9. find untuk menemukan satu nilai pada array
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var angka2 = angka.find(function (x) {
  return x > 5;
});
console.log(angka2);
