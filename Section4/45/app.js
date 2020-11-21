/**
 * IIFEs and Safe Code
 */

(function(name){

    var greeting = 'Hello';
    console.log(greeting + ' ' + name);

}('John')) // IIFE
console.log(greeting);

/**
 * Behind the scenes
 * 
 * Global Execution Context ()
 * 
 * New Execution Context (for the anonymous function)
 * This variable greeting = 'Hello' is in this context
 * 
 * Var greeting = 'Hola' in other execution context (Other script)
 * 
 */


(function(global, name){

    var greeting = 'Hello Global';
    global.greeting = 'Hello Global'
    console.log(greeting + ' ' + name);

}(window,'John')) // IIFE

console.log(greeting);