/**
 * Functional Programming 2
 * underscore.js
 * lodash.com
 */

 var arr1 = [1,2,3];

 // underscore library
 var arr2 = _.map(arr1, function(item) {
     return item * 3;
 })
 console.log(arr2);

 // underscore library
 var arr3 = _.filter([2,3,4,5,6,7], function(item) {
     return item % 2 === 0;
 })
 console.log(arr3);