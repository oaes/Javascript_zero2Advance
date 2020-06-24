//abstraction in javascript. just put the var or let keyword instead of this which you don not want to give access to the user

var rat = function (height, width) {
  this.height = height;
  this.width = width;
  var position ={
      x: 33,
      y:32
  }

  var draw = function () {
    console.log("my height is" + this.height);
    console.log("my width is" + this.width);
  }.bind(this);
  this.printpoint = function () {
    draw();
    console.log("my width is" + this.width);
    console.log("my height is" + this.height);
  };
  Object.defineProperty(this, "position",{
      get: function(){
          return position
      },
      set:function(value){
          position = value
      }
  })
};

var ract1 = new rat(77, 99);
ract1.printpoint();

ract1.position={
    x: 333,
    y:3322
}
console.log(ract1.position);

