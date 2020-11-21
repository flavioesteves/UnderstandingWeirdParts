/**
 * Conceptual Aside Arrays colections of anything
 */

 //var arr1 = new Array(); alternative syntax

 // JS is dynamic tuped can have different types in the Array (String, Boolean, Objects)
 var arr = [
     1, 
    false, 
    {
        name: 'Tony',
        address: '111 Main St.'
    },
    function(name) {
        var greeting = 'Hello';
        console.log(greeting +' '+ name);
    },
    'hello'
];


console.log(arr);
arr[3](arr[2].name);