/**
 * Namespace: A Container for variables and functions
 */
var greet = 'Hello!';
var greet = 'Hola!';

console.log(greet);


var english = {};
var spanish = {};

/**
 * english.greetings = undefined
 * undefined.greet
 */

english.greetings = {};
english.greetings.greet = 'Hello!';
spanish.greet = 'Hola!';

console.log(english);
console.log(spanish);


/**
 * A good way of initialize
 */
var english1 = {
    greetings : {
         basic: 'Hello!'
        }
    };

console.log(english1);