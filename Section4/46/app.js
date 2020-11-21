/**
 * Understanding Closures
 */

function greet(whattosay) {
   
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

greet('Hi')('Tony');

var sayHi = greet('Hi');
sayHi('Tony');

/**
 * Behind the scenes
 * 
 * Global Execution Context
 * 
 * greet() Execution Context 
 * ---> whattosay 'Hi' - After executed 
 *
 * Global Execution Context
 * sayHi()
 * 
 * 'sayHi'() Execution Context name 'Tony'
 * 
 * Context whattosay 'Hi' and name 'Tony' when is finished is called closure
 */