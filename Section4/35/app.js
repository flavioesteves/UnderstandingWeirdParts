/**
* Functions statements and function expressions
*/


greet(); // hosted
//Function statement
function greet() {
    console.log('hi (function statement)');
}


//AnonnymousGreet(); will have a undefined is not a function
//Function expression
var anonnymousGreet = function() {
    console.log('hi (function expression)');
}

anonnymousGreet(); // can't be hosted;
/**
 * NAME: anonymous (function);
 * CODE: console.log('hi');
 */

 function log(a) {
    a();
 }
// Creation of the object on the fly
 log(function(){
     console.log('hi (function inside function)')
 });