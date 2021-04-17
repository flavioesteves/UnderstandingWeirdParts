/**
 * Dangerous Aside: 'new' and functions
 * 
 */


// function constructor
// As a naming convention we should make the first letter as a Uppercase
function Person(firsName,lastName) {
    console.log(this);
    this.firstName = firsName;
    this.lastName = lastName;
    console.log('This function was invoked');
    //return {greeting: 'i got in the way'};
}

Person.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName;
}


// Dangerous : this is just a function, without the new the prototype functionality is not implemeted
var john = Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Something');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastName + ', ' + this.firstName;
}

console.log(john.getFormalFullName());
