/**
 * Deep Dive Into Source Code: jQuery - Part 1&2&3
 * Sizzle CS Selector - JS Library inside jQuery
 * 
 * Big Word Alert: Method Chaining: calling one method after another, and each method affects the
 * parent object. So obj.method1().method2() where both methods end up with a 'this' variable pointing at 'obj'.
 */

// 2 ways of calling jQuery vars
var a = jQuery('ul');
console.log(a);
var q = $('ul.people li');
console.log(q) 


// 72
var jq = $('ul.people').addClass('newclass').removeClass('people');
console.log(jq);

