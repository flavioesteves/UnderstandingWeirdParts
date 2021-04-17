/**
 * Function Contructors, 'new', and the History of Javascript
 * 
 * Function Constructors: A normal fucntion that is used to contruct objects.
 * the 'this' variable points a new empty object, and that object iis returned from the function automatically
 */



//example 1 'new'
function Person(firsName,lastName) {
    console.log(this);
    this.firstName = firsName;
    this.lastName = lastName;
    console.log('This function was invoked');
    //return {greeting: 'i got in the way'};
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Something');
console.log(jane);
//Javascript operator 'new'
var a = {}; // == operator 'new' a empty object will point (this) to a new empty object in previous case the function Person



