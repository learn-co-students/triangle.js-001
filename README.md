---
languages: javascript
tags: geometry, oo
resources: 2
---

# Triangle JS Edition
Make a `Triangle` constructor function that is used to make new triangle instances.  If an instance is created with impossible sides then it `throw` an error.  If not a triangle should know what kind of triangle it is. Keep in mind that the sum of the lengths of any two sides of a triangle always exceeds the length of the third side, a principle known as the _triangle inequality_.

## Expectations
  * The constructor function accepts the length of the three sides as three arguments
  * The `#kind` method should return a triangle's kind
  * The program should raise an error if the triangle cannot exist when a new one is initiated.

## Tests
When you finish passing a test, remove the `x` from `xit` to convert it to a runnable test.

To run the specs follow these commands:
```shell
# first install the new gem to run the tests
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install learn-co

# to run in the command line run
learn

#to run in the browser
learn -b
```

## Resources
* [Throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
* [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)