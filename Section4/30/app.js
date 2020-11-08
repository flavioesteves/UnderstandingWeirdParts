//IS NOT THE BEST WAY TO CREATE A NEW OBJECT
/**
 * first approach [] operator
 */

var person = new Object();
var firstNameProperty = 'firstName';

person['firstName'] = 'Tony';
person['lsatName'] = 'Alicea';

console.log(person);
console.log(person[firstNameProperty]);

/**
 * 2nd approach . operator -- DEFAULT USE
 */
console.log(person.firstName);
console.log(person.lastName);

/**
 * 3rd Approach object > object
 */

person.address = new Object();
person.address.street = '111 Main St.';
person.address.city = 'New York';
person.address.state = 'NY';

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);