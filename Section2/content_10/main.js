/*
The Execution Context:Creation and 'Hoisting'

Execution Context is Created (Creation Phase)
 ** Memory Space**
    Global Object + 'this' + Outer Environment
 *****************
Hosting: Setup Memory Space for Variables and Functions "Hoisting"

Variables are setted 'Undefined'
Functions are setted in all integrity

 */


var a = 'Hello World';

function b() {
    console.log('Called b!');
}

b()
console.log(a);
