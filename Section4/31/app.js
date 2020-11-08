//Object Literal = {} instead of new Object();

var person = {};
console.log(person);

// initialize a object 
// version 1
var person1 = {firstName: 'Tony', lastName: 'Alicea'};
console.log(person1);

//version 2
person2 = new Object();
person2.firstName = 'Tony2';
person2.lastName = 'Alicea2';
console.log(person2);

// version 3 - prefered way <----- Best 
var person3 = {
    firstName: 'Tony3',
    lastName: 'Alicea3',
    address: {
        street: '111 main St.',
        city: 'New York',
        state: 'NY'
    }
};
console.log(person3);


// function calling
var Tony = {
    firstName: 'Tony',
    lastName: 'Alicea',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstName);
}

greet(Tony);

// function by declaring object in the constructor
greet({
    firstName: 'Mary',
     lastName: 'Doe'
});

// Added version 2
Tony.address2 = {
    street: '333 Second St.'
}
