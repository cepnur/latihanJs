// function volume(a, b) {
//   var a;
//   var b;
//   var total;

//   a = a * a * a;
//   b = b * b * b;

//   total = a + b;
//   return total;
// }

// console.log(volume(3, 5));

//refactoring
function volume(a, b) {
  return a * a * a + b * b * b;
}

console.log(volume(3, 5));
