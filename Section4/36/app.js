/**
* Conceptual Aside by value vs by reference
*
* Approach by Value
* a ---> Primitive Value 0x001
* b = a (or pass a function)
* b ---> Copy of Primitive Value 0x002
*
*
*
*Approach by Reference
* a ---> Object 0x001
* b = a (or pass a function)
* b ---> Object 0x001
*
*/

// by value (primitives)

var a = 3;
var b;

b = a;
a = 2;

console.log(a);
console.log(b);

// by reference ( all objects (including functions))
var c = { greeting: 'hi'};
var d;

d = c;

c.greeting = 'hello'; // mutate

console.log(c);
console.log(d);


// by reference (even as parameters)
function changeGreeting (obj) {
    obj.greeting = 'Hola'; // mutate
}


changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
// In this case c and d are diferently memory allocated 0x001 and 0x002

c = {greeting: 'howdy'};
console.log(c);
console.log(d);