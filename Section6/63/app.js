/**
 * Object.create and Pure Prototypal Inheritance
 * 
 * Polyfill: Code that adds a feature which the engine may lack.
 */

//Polyfill Object.create
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
        + ' only accepts the first parameter.'); 
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}


//Example 1 the base for construction of other objects
var person = {
  firsName: 'Default',
  lastName: 'Default',
  greet: function () {
    return 'Hi ' + this.firsName; 
  }
}

// Example 2
var john = Object.create(person);
john.firsName = 'John';
john.lastName = 'Doe';
console.log(john);



