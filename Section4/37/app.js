/**
 * Objects, Functions and 'this'
 */

// This point to the global object (this scope)
//console.log(this);

function a() {
    console.log(this);
    this.newVariable = 'hello';
}

var b = function() {
    console.log(this);
}

a(); // A Invoke point to the Global Object
console.log(newVariable);

b(); // B invoke pioint to the Global Object


// This case is pointing to the method of the object
var c = {
    name: 'The c Object',
    log: function() {
        
        this.name = 'Updated c object';
        console.log(this);

        // People thing next function behaviour is a bug because is adding to the Global Object instead of on this context
        var setName  = function(newName) {
            this.name = newName;
        }
        setName('Updated again! The c object');
        console.log(this);
    }
}
c.log();


// Pattern to fix the Bug on the previously object with this behaviour
var d = {
    name: 'The d Object',
    log: function() {

        var self = this // Pattern to solve the issue related to pointing to the global scope instead of the current scope
        
        self.name = 'Updated d object';
        console.log(self);

        // People thing next function behaviour is a bug because is adding to the Global Object instead of on this context
        var setName  = function(newName) {
            self.name = newName;
        }
        setName('Updated again! The d object');
        console.log(self);
    }
}
d.log();

// let keyword clear the issues with socpe issue



