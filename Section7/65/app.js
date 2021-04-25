/**
 * Odds and Ends - Initialization
 */

//setup data for testing
var people = [
  {
    //the 'john' object
    firstName: 'John',
    lastName: 'Doe',
    addresses: [
       '111 Main St.',
       '222 Third St.'
    ]
  }, 
  {
    // the 'jane' object
    firstName: 'Jane',
    lastName: 'Doe',
    addresses: [
       '333 Main St.',
       '444 Third St.'
    ],
    greet: function() {
      return 'Hello!';
    }
  }
]
console.log(people)