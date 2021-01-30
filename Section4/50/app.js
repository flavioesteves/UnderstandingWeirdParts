/**
 * ####### IMPORTANT #######
 * Call(), Apply() and Bind() 
 * 
 * Function Execution Context
 * Variable Environment > 'this' > Outer Environment 
 * '
 * Function a special tyoe of object:
 *  - Name optional, can be ananymous
 *  - Code > "Invocable"()
 *  - All functions have access to this 3 special methods : call(), apply() and bind(),
 * are connected to the 'this' variable.
 * 
 * 
 * 
 */


var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var logName = function (lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-------');

}.bind(person); // makes as well a copy of the function with 'this' = person if isnot binded will be a error
logName();

/**
 * Using this fucntion as an object
 * The bind method return a new function by making a new copy of a function, this case logName function
 * 
 */

var logPersonName = logName.bind(person);
logPersonName('en'); // Since is the copy 'this' becomes the person object

/**
 * Call - call the function and execute it
 */
logName.call(person, 'en', 'es');


/**
 * Apply - same as call, but isntead receives a an array of parameters
 */
logName.apply(person, ['es', 'en']);

/**
 * Instead of normal fucntion could be used as 
 * function expression
 */

(function (lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-------');
}).apply(person, ['usa', 'fr']);

/**
 * Other scenarios 2nd part
 */

// Function Borrowing 
var person2 = {
    firstName: 'Jane',
    lastName: 'Doe'
}
console.log(person.getFullName.apply(person2));

// Function Currying
function multiply(a,b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2); // set the 1st parameter as 2 if was (this, 2, 2 ) a and b were constant 2
console.log(multipleByTwo(4)); // second parameter

// equal to this
function multipleBy2(b) {
    var a = 2;
    return a*b;
}

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));

