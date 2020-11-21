/**
 * Immediately Invoked Function expressions (IIFE)S
 * 
 * Special in functions Code property '()'
 */


// function statement
function greet(name) {
     console.log('Hello ' + name);
}

greet('John')

// using a  function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('John');


// Using an Immediately Invoked Function Expression (IIFE)
var greeting = function(name) {
    return 'Hello ' + name;
}('John');

console.log(greeting);


//Doing nothind

3;
'String';
{
    name:'object'
}


//function expression
var firstName = 'John';

(function(name) {

    var greeting = 'Inside IIFE Hello';
    console.log(greeting + ' ' + name);

}(firstName)); // IIFE


