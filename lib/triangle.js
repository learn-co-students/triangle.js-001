'use strict';
function Triangle(a,b,c) {
  this.sides = [ a, b, c ];
  if ( this.isIllegal() ) {
    throw new TriangleError();
  }
}

Triangle.prototype.kind = function() {
  var name = 'scalene';

  if (this.isIllegal()) {
    name = 'illegal';
  } else if (this.isEquilateral()) {
    name = 'equilateral';
  } else if (this.isIsosceles()) {
    name = 'isosceles';
  }

  return name;
};

Triangle.prototype.isIllegal = function() {
  return this.violatesInequality() || this.hasImpossibleSides();
};

Triangle.prototype.violatesInequality = function() {
  var a = this.sides[0], b = this.sides[1], c = this.sides[2];
  return (a + b <= c) || (a + c <= b) || (b + c <= a);
};

Triangle.prototype.hasImpossibleSides = function() {
  return this.sides[0] <= 0 || this.sides[1] <= 0 || this.sides[2] <= 0;
};

Triangle.prototype.isEquilateral = function() {
  return this.uniqueSides().length === 1;
};

Triangle.prototype.isIsosceles = function() {
  return this.uniqueSides().length === 2;
};

Triangle.prototype.uniqueSides = function() {
  var sides = this.sides;
  var uniques = {};

  for (var i = 0; i < sides.length; i++) {
    var currentSide = sides[i];
    uniques[currentSide] = true;
  }

  var uniqueSides = [];

  for (var uniqueSide in uniques) {
    uniqueSides.push(uniqueSide);
  }

  return uniqueSides;
};

function TriangleError() {
  this.message = 'This Trigangle is Illogical!!!';
}
TriangleError.prototype = Error.prototype;