//object literals
var rectangle = {
  weight: 100,
  height: 40,

  draw: function () {
    console.log("i am rectangle");
    console.log("height" + this.height);
    console.log("weight" + this.weight);
  },
};
rectangle.draw();

rectangle.weight = 300;

rectangle.draw()