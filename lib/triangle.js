'use strict';

function TriangleError(){
  this.name = "TriangleError"
  // new Error()
}
TriangleError.prototype = Object.create(Error.prototype)
TriangleError.prototype.constructor = TriangleError
function Triangle(side1, side2, side3){
  this.side1 = side1
  this.side2 = side2
  this.side3 = side3
  this.kind = function(){
    if(side1 === side2 && side1 === side3 && side1 != 0){
      return "equilateral"
    } else if(side1 === side2 && side1 != 0 || side2 === side3 && side2 != 0|| side1 === side3 && side1 != 0){
      return "isosceles"
    } else if(side1 != side2 || side2 != side3 || side1 != side3){
      return "scalene"
    }
  }
  var arr = [side1, side2, side3].sort()
  if(arr[0] + arr[1] <= arr[2] || arr[0] <= 0){
    throw new TriangleError()
  }
};
