//using this" keywords in object

//without putting this keywords in object it always show us window object
function myfunc() {
  console.log(this);
}
myfunc();


//exploring this keywords
var obj = {
  width: 88,
  height: 33,

  draw: function () {
    console.log("height" + this.height);
    console.log("width" + this.width);
  },
  printshop: function () {
    console.log("width" + "", this.width);
    console.log("height" + "", this.height);
  },
};
console.log(this);
obj.draw();

//we can change the value of object easily
var boj = {
  width: 100,
  height: 50,
  job: obj.printshop,
};
boj.job();
