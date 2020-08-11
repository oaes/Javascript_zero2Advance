//we know that a child function can access their parents functions elements (function,variable and objects)for the lexical scope. and the child function can also access their parents functions variable,function and objects even parents function has already called, that's call clouser.

function ClosuresDemo() {
  let x = 5;
  let obj2 = {
    name: "oaes",
    status: "between job",
  };
  return function () {
    let y = 4;
    console.log(`sum:x+y=`, +(x + y), obj2.name);
  };
}
ClosuresDemo()();
