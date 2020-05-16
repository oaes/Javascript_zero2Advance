  //The keyword eval is an abbreviation for “evaluate.” The function essentially takes a string with JavaScript code and will evaluate it for you.

  var number = 1;
  function test() {
      var number = 2;
      eval('number = 3');
      return number;
  }
  test(); // 3
  number; // 1