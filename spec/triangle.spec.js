'use strict';

describe('Triangle', function() {
  describe('Legal triangle', function() {
    it('equilateral triangles have equal sides', function() {
      var triangle = new Triangle(2,2,2);
      expect(triangle.kind()).toEqual('equilateral');
    });

    it('larger equilateral triangles also have equal sides', function() {
      var triangle = new Triangle(10,10,10);
      expect(triangle.kind()).toEqual('equilateral');
    });

    it('isosceles triangles have last two sides equal', function() {
      var triangle = new Triangle(3,4,4);
      expect(triangle.kind()).toEqual('isosceles');
    });

    it('isosceles trianges have first and last sides equal', function() {
      var triangle = new Triangle(4,3,4);
      expect(triangle.kind()).toEqual('isosceles');
    });

    it('isosceles triangles have two first sides equal', function() {
      var triangle = new Triangle(4,4,3);
      expect(triangle.kind()).toEqual('isosceles');
    });

    it('isosceles triangles have in fact exactly two sides equal', function() {
      var triangle = new Triangle(10,10,2);
      expect(triangle.kind()).toEqual('isosceles');
    });

    it('scalene triangles have no equal sides', function() {
      var triangle = new Triangle(3,4,5);
      expect(triangle.kind()).toEqual('scalene');
    });

    it('scalene triangles have no equal sides at a larger scale too', function() {
      var triangle = new Triangle(10,11,12);
      expect(triangle.kind()).toEqual('scalene');
    });

    it('scalene triangles have no equal sides in descending order either', function() {
      var triangle = new Triangle(5,4,2);
      expect(triangle.kind()).toEqual('scalene');
    });

    it('very small triangles are legal', function() {
      var triangle = new Triangle(0.4,0.6,0.3);
      expect(triangle.kind()).toEqual('scalene');
    });
  });

  describe('Illegal triangles', function() {
    it('test triangles with no size are illegal', function() {
      expect(function(){ new Triangle(0,0,0) }).not.toBeDefined();
    });

    it('triangles with negative sides are illegal', function() {
      expect(function(){ new Triangle(3,4,-5) }).not.toBeDefined();
    });

    it('triangles violating triangle inequality are illegal', function() {
      expect(function(){ new Triangle(1,1,3) }).not.toBeDefined();
    });

    it('triangles violating triangle inequality are illegal 2', function() {
      expect(function(){ new Triangle(2,4,2) }).not.toBeDefined();
    });

    it('triangles violating triangle inequality are illegal 3', function() {
      expect(function(){ new Triangle(7,3,2) }).not.toBeDefined();
    });
  });

});
