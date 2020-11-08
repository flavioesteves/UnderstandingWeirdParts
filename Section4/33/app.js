/**
* Namespace: JSON and Objects Literals
* JavaScript Object Notation
*/

var objectLiteral = {
    firstName: 'Mary',
    isAProgrammer: true
};

console.log(objectLiteral);

/**
 * Previous years, the data was sent on the internet by XML
 * Issues when is a lot of data
 * <object>
 *      <firstName>Mary</firstName>
 *      <isAProgrammer>true</isAProgrammer>
 * </object>
 */

/**
 * JSON format - a string of data with a object syntax and  quotes("")
 * 
 * {
 *      "firstName": "Mary",
 *      "isAProgrammer": true
 * 
 * }
 * 
 */

console.log(JSON.stringify(objectLiteral));


var jsonValue = JSON.parse('{"firstName": "Mary","isAProgrammer": true}');
console.log(jsonValue);