/**
 * Dangerous Aside: Built-In Function Constructors
 */
//use literals instead of built in function contructor

//Browser example
var a = 3;
var b = new Number(3)
a == b // true
a === b // false 'a' is primitive 'b' is an object

// for date moment.js instead of the built constructor for Date

var c = Number('3'); // a regular fucntion without new keyword