/**
 * ES6 and Classes 
 */

//In ES6 Create Object and protorype
//This is an object - prototype  
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName
  }

  greet () {
    return 'Hi ' + this.firstName; 
  }
}

var josh = new Person('Josh' , 'Doe');


// setting prototype (__proto__) --> "extends"
class InformalPerson extends Person {
  constructor (firstName, lastName) {
    super(firstName, lastName); //"super" calls the contructor of the object is the prototype
  }
  greet() {
    return 'Yo ' + this.firstName;
  }
}