//we can destructuring together in array and object which we can called mixed destructure

let node = {
    type: "Identifier",
    name: "foo",
    loc: {
        start: {
            line: 1,
            column: 1
        },
        end: {
            line: 1,
            column: 4
        }
    },
    range: [0, 3]
};
console.log(node);
let {type,
    loc:{start},
     range:[firstIndex]}= node

console.log(type);
console.log(start.line);
console.log(firstIndex);
