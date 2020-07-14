//counting word within sentence
//hunting white space
var speech =
  "tomorrow is my interview again i hope it will be better than before, inshaAllah";

var count = 0;

for (var i = 0; i < speech.length; i++) {
  if (speech[i] == " ") {
    count++;
  }
}
count++;
console.log(count);