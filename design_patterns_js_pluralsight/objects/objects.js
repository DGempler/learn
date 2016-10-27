// ways to create objects
var obj = {};
var nextObj = Object.create(Object.prototype);
var lastObj = new Object();

// assign & access via dot or bracket notation

// defineProperty
Object.defineProperty(obj, 'name', {
    value: 'my name',
    writable: true, // can't overwrite property
    enumerable: true, // shows up in keys
    configurable: true
});

// inheritance using Object.create
