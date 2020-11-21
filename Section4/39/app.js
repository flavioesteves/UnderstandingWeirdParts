/**
 * 'arguments' and spread
 * 
 * Variable Environment <--> this <--> Outer Environment
 *                      ---> arguments <--- 
 * Arguments (Will become depracated)- The Parameters you pass to a function
 *           - JS gives you a keyword of the same name which contains them all.
 * 
 * Spread (New implementation)
 */

 // Argument
 // function of '=' in default only work in modern version of the browsers
 function greet(firstName, lastName, language = 'en') {

    lastName = lastName || 'Mac'; // traditional way of doing the the default way in js

    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('------- Arguments');
        return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments); // this is "array like" but doesn't have the same functionalities
    console.log('arg 0: ' +  arguments[0]);
    console.log('-------');
 }

 //In JS is allowed to execute the function without the arguments because of the hosting 
 //In other language is error
 greet();
 greet('John');
 greet('John', 'Doe');
 greet('John', 'Doe', 'EN');


 //Spread
 // '...' wrap all the extra arguments in the array declared
 function greet1(firstName, lastName, language = 'en', ...other) {

    lastName = lastName || 'Mac'; // traditional way of doing the the default way in js

    if (arguments.length === 0) {
        console.log('G1 Missing parameters!');
        console.log('G1------- Arguments');
        return;
    }

    console.log(firstName);
    console.log(lastName);
    console.log(language);
    console.log(arguments); // this is "array like" but doesn't have the same functionalities
    console.log('G1 arg 0: ' +  arguments[0]);
    console.log('G1-------');
 }
 greet1();
 greet1('John');
 greet1('John', 'Doe');
 greet1('John', 'Doe', 'EN', '111 main st', 'something');
