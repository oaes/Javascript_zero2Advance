//call bind and apply in javascript

function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}
myFunc();
//call, apply both invoked the function immediately
myFunc.call({ a: 9, b: 8 }, 88, 87);
//apply expect an array for it's second argus where call don't
myFunc.apply({ a: 3, b: 55 }, [34, 22]);

//bind, it bind the function's object for future use 
myFunc.bind({ a: 3, b: 99 });
