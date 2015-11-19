'use strict';

function Triangle(s1, s2, s3) {
  if (s1 <= 0 || s2 <= 0 || s3 <= 0 || s1 + s2 <= s3 || s1 + s3 <= s2 || s3 + s2 <= s1) {
      throw new TriangleError();
  }
  this.kind = function() {
    if (s1 == s2 && s1 == s3) {
      return 'equilateral';
    } else if ((s1 == s2 || s1 == s3 || s2 == s3) 
     && (s1 != s2 || s1 != s3)) {
      return 'isosceles';
    } else if (s1 != s2 && s1 != s3 && s2 != s3) {
      return 'scalene';
    }
  }
}

function TriangleError(message){
  this.message = "Nope";
}
TriangleError.prototype = Object.create(Error.prototype);
//TriangleError.prototype.constructor = TriangleError;