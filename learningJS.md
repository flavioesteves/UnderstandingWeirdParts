# Section 2 - Execution Contexts and Lexical

####### Conceptual Aside #######

* Syntax Parsers: "A program that reads your code and determines what it does and if its grammar is valid".
* Execution Contexts: "A Wrapper to help manage the code that is running".
* Lexical Environments: "Where something sits physically in the code you write".
* Name/Value Pair: "A name which maps to a unique value".
* Object: "A collection of name value pairs".
* Global Environment and The Global Object
* Wraps
* Execution Context (Global)
 - Global Object
 - Special variable "this"
 - In the browser the global object is "window"
 - Outer Environment
 - Run the Code

# Section 3 - Types and Operators

* Types and Javascript
*  -Is Dynamic Typing
*  -Static Typing example: C#, JAVA
* 
* 20 - 6 Primitive Types(A type od data that represents a single value is not a object):
*  -Boolean: true or false
*  -undefined: represents lack of existence (shouldn't set a variable to this)
*  -null: represents lack of existence (use to set a variable to this)
*  -Number: floating point number
*  -String: 'characters' or "characters"
*  -SYMBOL: new in ES6
*  -pseudo primitive - NaN (not a number)
* 
* 21 - Operators  - special function with 2 values return 1
*  = + - / *
* 22 - Operator Precedence and Associativity
*  -Functions are called in order of precedence (HIGHER precedence wins)
*  -ASSOCIATIVITY: what order operator functions get called in left-to-right or right-to-left, when functions have     same precedence
*  -Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
* 
* 24 - Coercion
*  -Converting a value from one type to another: this happens quite often in Javascript because it's dynamically typed.
* 
* 25 - Comparison operators 
*  -Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
* 
* 27 - Existence and Booleans
*  -if (a) { is true if the var is not = "", null , undefined or 0}
* 
* 28 - Default values
*  -is good to put default values example: name = name || '<Your default value>' // care with =0 
 
# Section 4 - Objects And Functions

* 30 - Objects and dots (memory)
    -Objects have property and methods(functions)

* 31 - Objects and objects literals
* 32 - Framework Aside: faking Namespaces - REVIEW

* 34 - First Class Functions 
     -Everything you can do with other types you can do with functions you can do with functions.
     -Assign them to variables, pass them around, create them on the fly.
     -Function is a object - A special type of object.
   ---> Primitive
   ---> Object
   ---> Function
   --->(Important) NAME optional, can be anonymous
   --->(Important) CODE "Invocable" ()
* 35 - Function Statements And Function Expressions
    -Expression: A unit of code that results in a value: It doesn't have to save a variable.

* 36 - Conceptual Aside: By Value vs By Reference
    -"Immutable" means it can't be changed.

* 37 - Objects, Functions and 'this'
    -Execution Context is Created (Creation Phase)
    -Variable Environment
    -'this'
    -Outer Environment

* 38 -Conceptual Aside Arrays colections of anything
* 39 -'arguments' and spread
     -ARGUMENTS: The Parameters you pass to a function

* 40 - Framework Aside - Function Overloading
* 41 - Conceptual Aside - Syntax Parsers
* 42 - Dangerous Aside: Automatic Semicolon Insertion
* 43 - Framework Aside - Whitespace: Invisible Characters that create literal 'space' in your written code 
      -Carriage returns, tabs, spaces.
* 44 - Immediately Invoked Function expressions (IIFE)S
* 45 - IIFEs and Safe Code
* 46 - Understanding Closures Part 1 (Important)
* 47 - Understanding Closures Part 2 (Important)
* 48 - Framework Aside: Function Factories (Important)
* 49 - Closures and Callbacks (Important)
* 50 - Call(), Apply() and Bind()
      -Function Borrowing 
      -Function Currying

* 51 - Functional Programming
* 52 - Functional Programming part2 : underscore.js, lodash.com

# Section 5 - Object-Oriented Javascript and Prototypal Inheritance

* 53 - Conceptual Aside: Classical vs Prototypal Inheritance
* 54 - Understanding the Prototype
* 55 - Everything is an Object (or a primitive)
* 56 - Reflection and extended

# Section 6 - Building Objects

* 57 - Function Constructors, 'new', and the History of Javascript
* 58 - Function Contructors and '.Prototype'
* 59 - Dangerous Aside: 'new' and functions
* 60 - Conceptual Aside: Built-In Function Contructors
* 61 - Dangerous Aside: Built-In Function Constructors
* 62 - Dangerous Aside: Arrays and for..in 
* 63 - Object.create and Pure Prototypal Inheritance - Polyfill
* 64 - ES6 and Classes - Class, extends,super

# Section 7 - Odds and Ends

* 65 - Initialization
* 66 - 'typeof', 'instanceof', and Figuring Out What Something Is
* 67 - Strict Mode
* 68 - Strict Mode Reference
    EXTRAS
    Read more about strict mode on the MDN (Mozilla Developer Network): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

# Section 8 - Examining Famous Frameworks and Libraries

* 69 - Learning From Other's Good Code
* 70 - Deep Dive into Source Code:jQuery - Part 1
* 71 - Deep Dive into Source Code:jQuery - Part 2
* 72 - Deep Dive into Source Code:jQuery - Part 3

# Section 9 - Let's Build a Framework / Library!

* 73 - Requirements
* 74 - Structuring Safe Code
* 75 - Our Object and its Prototype
* 76 - Properties and Chainable Methods
* 77 - Adding jQuery Support
* 78 - Good Commenting
* 79 - Let's Use our Framework
* 80 - A Side Note (No Code)

# Section 10 - Bonus Lectures (NO Code)

* 81 - Typescript, ES6, and Transpiled Languages
* 82 - Transpiled Languages References

# Section 11 - Bonus: Geetting Ready for ECMAScript 6 (No Code)

* 83 - Existing and Upcoming Features
* 84 - ES6 Features Reference

# Section 12 - Conclusion (No Code)

* 85 -  Learning to Love the Weird Parts