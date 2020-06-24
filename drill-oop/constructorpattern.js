//creating class by using constructor pattern

// var obj = {
//   height: 30,
//   width: 20,
//   draw: function () {
//     console.log("i am a height" + this.height);
//     console.log("i am a width" + this.width);
//   },
//   pinpoint: function () {
//     console.log("this is a height" + this.height);
//     console.log("this is a width" + this.width);
//   },
// };

//constructor pattern
var Reatanother = function (height, width) {
  {
    this.height = height;
    this.width = width;
    this.draw = function () {
      console.log("i am a height" + this.height);
      console.log("i am a width" + this.width);
    };
    this.pinpoint = function () {
      console.log("this is a height" + this.height);
      console.log("this is a width" + this.width);
    };
  }
};

var ract1 = new Reatanother(40, 30);
ract1.draw();
