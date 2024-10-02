var item = prompt("masukan nama makanan / minuman : \n (cth: susu, daging, nasi)");

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
  case "air kelapa":
    alert("makanan / minuman Sehat!");
    break;
  case "hamburger":
  case "pizza":
  case "gula":
    alert("makanan / minuman tidak Sehat!");
    break;
  default:
    alert("bukan minuman/makanan");
    break;
}
