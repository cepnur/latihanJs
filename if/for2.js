var jmlAngkot = 20;
var angkotBeroperasi = 8;
var noAngkot = 1;
while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot No. " + noAngkot + " Beroperasi Dengan Baik");
  noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
  console.log("Angkot No. " + noAngkot + " Tidak Beroperasi");
}
