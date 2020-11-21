/**
 * Dangerous Aside - Automatic Semicolon Insertion
 */

// Because of the automatic semicolon insertion, the return will be "return;"" 
// So will be undefined 
function getPerson () {

    return // return;
    {
        firstName: 'Tony'    
    }
}
console.log(getPerson());

//to fix this behaviour
function getPersonFixed() {
    return {
        firstName: 'Tony'
    }
}
console.log(getPersonFixed());