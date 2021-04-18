/**
 * Conceptual Aside Built-In Function Constructors
 * (Avoid doing this unless is necessary)
 */

// Browser (built in functions) this is a object that contains primitives
//example 1
var a = new Number(3); // because is an object have prototype
Number.prototype;
a.toFixed();

//example 2
var b = new String('John'); // because is an object, have prototype
String.prototype;
b.indexOf('o');

//example 3
var c = new Date("4/18/2021");
Date.prototype;
c.getDate();


// JS Script example
// Add a new function to all strings by adding to the prototype
// This concept to build frameworks 
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit;
}

console.log('John'.isLengthGreaterThan(3));

Number.prototype.isPositive = function() {
    return this > 0;
}
// 3.isPositive() -- > error

// lookm like a number but is a object that wraps a number 
var number = new Number(3)
console.log(number.isPositive());