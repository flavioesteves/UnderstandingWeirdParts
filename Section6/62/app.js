/**
 * Dangerous Aside: Arrays and for..in 
 */

Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

//Don't use for in because you can loop into prototype, because an array is a object in js
//Use the normal 'for' instead
for (var prop in arr) {
  console.log(prop + ': ' + arr[prop]);
}
