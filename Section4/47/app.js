/**
 * ### Important ###
 * Understanding Closures Part 2
 */

function buildFunctions() {

    var arr = [];

    for (var index = 0; index < 3; index++) {

        arr.push(
            function() {
                console.log(index);
            }
        )
    }

    return arr;
}

var fs = buildFunctions();

fs[0](); // result log 3
fs[1](); // result log 3
fs[2](); // result log 3

/**
 * Under the hood
 * 
 * buildFunctions() - Execution Context:
 *  index, 3, arr[f0,f1,f2];
 * 
 * They area maaped to the same value of index , since Global Context is looking for the parent context in the current time
 * and is index = 3 (same location in memory) 
 * 
 * Global Execution Context - buildFuncions(), fs
 * 
 */


 // 2nd part
 function buildFunctions2() {

    var arr = [];

    for (var index = 0; index < 3; index++) {

        //option 1 ES6
         //let j = index

        arr.push(
            //option 2 (function(){})
            //Executiong a function by returning a function
            (function(j) {
                return function() {
                //console.log(j);Option 1- ES6
                console.log(j);
                }
            }(index))
        )
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0](); // result log 0
fs2[1](); // result log 1
fs2[2](); // result log 2