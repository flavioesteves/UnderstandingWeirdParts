/*
    Conceptual Aside: Javascript and 'undefined'
    Special Value: variable wasn't be set
    Special keyword

    Never set a variable to undefined (best practices);
 */

var a; // set with special value undefined
console.log(a);

if(a === undefined) {
    console.log('a is undefined');

}
else {
    console.log('a is defined');
}