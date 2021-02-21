/**
 * Understanding the prototype
 * 
 * Objects can have properties and methods
 * 
 * obj:{prop1: one}
 * obj.prop1
 * 
 * 
 * obj --> proto --> prop2
 * 
 * obj.prop2 (is in the prototype object)
 * each object can have their own prototype
 * 
 * 
 * ## Prototype Chain ##
 * 
 * obj prop1
 * obj -->proto -->  prop2 --> proto --> prop3
 * obj.prop1
 * obj.prop2
 * obj.prop3
 * 
 * objects can share same prototype
 * ex: obj2.prop2 == obj.prop2
 * 
 */

var person = {
     firstName: 'Default',
     lastName: 'Default',
     getFullName: function() {
         return this.firstName + ' ' + this.lastName;
     }
}

var john = {
     firstName: 'John',
     lastName: 'Doe'
}

 //never use this, impact performance!!! For demo learning purposes
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstName);

var jane = {
    firstName: 'Jane'
}
jane.__proto__ = person;
console.log(jane.getFullName());