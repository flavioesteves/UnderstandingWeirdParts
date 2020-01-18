/*
    The Execution Context: Code Execution
    After creation Context: Global Object - 'this' - Outer Environment

    - Runs Your Code

*/

function b() {
    console.log('Called b!');
}

b();

console.log(a);

var a = 'Hello World';

console.log(a);
