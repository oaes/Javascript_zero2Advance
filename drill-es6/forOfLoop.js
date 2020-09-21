//for of loop working with value in place of index and it only work within iterable objects only otherwise not

const myArr = [1, 3, 4, 5];

for (let v of myArr) {
  console.log(v);
}

for (let v of "akash") {
  console.log(v);
}
