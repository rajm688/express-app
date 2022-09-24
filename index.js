const [, , a, b] = process.argv;
function addToNumber(a, b) {
  return a + b;
}
console.log(addToNumber(+a, +b));
