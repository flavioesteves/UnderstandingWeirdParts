/**
 * Framework Aside - Function Overloading
 */



// One Pattern
function greet(firstName, lastName, language) {
    language = language || 'en';

    if (language === 'en') {
        console.log('Hello ' + firstName + ' ' + lastName);
    }

    if (language === 'es') {
        console.log('Hola ' + firstName + ' ' + lastName);
    }
}

function greetEnglish(firstName, lastName) {
    greet(firstName, lastName, 'en');
}

function greetSpanish(firstName, lastName) {
    greet(firstName, lastName, 'es');
}

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');