'use strict';

function Triangle(a, b, c){
  // add your solution here!
  this.sideA = a;
  this.sideB = b;
  this.sideC = c;

  if ((a + b) < c || (a + c) < b || (b + c) < a) {
    this = undefined;
  }

  var triangle = new Triangle(a, b, c);

  Triangle.prototype.kind = function(a, b, c) {
    if (this) {
      if (a === b && a === c) {
          return 'equilateral';
      } else if (a === b || a === c || b === c) {
          return 'isosceles';
      } else {
          return 'scalene';
      }
    }
  }
};