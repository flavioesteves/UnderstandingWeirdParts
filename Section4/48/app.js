/**
 * Framework Aside: Function Factories
 */

 function makeGreeting (language) {

    return function (firstName, lastName) {

        if (language === 'en') {
            console.log('Hello ' + firstName + ' ' + lastName);
        }

        if (language === 'es') {
            console.log('Hola ' + firstName + ' ' + lastName);
        }

    }
 }


 /**
  * Every time is executed the function makeGreeting is allocated in a new memory space
  */
 var greetEnglish = makeGreeting('en'); //ex:. 0x002 each one is their own closure
 var greetSpanish = makeGreeting('es'); //ex:. 0x003 each one is their own closure

 greetEnglish('John', 'Doe'); //ex:. 0x004
 greetSpanish('Max', 'Red'); //ex:. 0x005

 /**
  * Under the hood
  * Stack:
  * 
  * () 'greetSpanish' firstName:'Max', lastName:'Red' 0x005(Execution context 5)
  * () 'greetEnglish' firstName:'John', lastName:'Doe' 0x004(Execution context 4)
  * 
  * makeGreeting() language 'es' 0x003 (Execution context 3)
  * makeGreeting() language 'en' 0x002 (Execution context 2)
  * 
  * Global Execution Context 0x001 (Execution context 1)
  * Variables:
  * 
  * greetEnglish 
  * greetSpanish
  * makeGreeting()
  */