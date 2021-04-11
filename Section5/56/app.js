/**
 * Reflection and Extend
 * 
 * Reflection: An Object can look at itself, listing and changing its properties and methods
 */


//Example
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

// BAD PRACTICE !! DEMO PURPOSES ONLY!!
john.__proto__ = person;

for (var prop in john){
    //only have access to the base object , in this case will ignore the 'getFullName' function
    if(john.hasOwnProperty(prop)) {
    console.log(prop + ' ' + john[prop]);
    }
}

//2nd example using the underscore library, LINE: 998, 999 , can be found by search extend
// function createAssigner (Line 98) ---> REFLECTION
var jane = { 
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastName + ', ' + this.firstName;
    }
}

var jim = {
    getFirstName: function() {
        return firstName;
    }
}

_.extend(john, jane, jim); // underscore.js library

console.log(john);

