//creating class by using factory pattern

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

function createRact(height, width) {
  return (obj = {
    height: height,
    width: width,
    draw: function () {
      console.log("i am a height" + "", this.height);
      console.log("i am a width" + "", this.width);
    },
    pinpoint: function () {
      console.log("this is a height" + "", this.height);
      console.log("this is a width" + "", this.width);
    },
  });
}

var ract1 = createRact(40, 80);
ract1.draw();

var ract2 = createRact(30, 90);
ract2.draw();

var ract3 = createRact(60,89)
ract3.draw()