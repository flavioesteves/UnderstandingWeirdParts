/**
 * Function Contructors and '.Prototype'
 * 
 * Function - a special type of object
 * --> code "Invocable" ()
 * --> Name optional, can be anonymous
 * --> prototype used only bt the "new" operator
 */



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

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Something');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastName + ', ' + this.firstName;
}

console.log(john.getFormalFullName());