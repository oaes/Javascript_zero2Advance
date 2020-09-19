// when a function call himself within his body then simply we call it recursion.

let n = 0;
function sum(n) {
  if (n === 0) {
    return 0;
  } else {
    return sum(n - 1) + n;
  }
}
console.log(sum(3));
