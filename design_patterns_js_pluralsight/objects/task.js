/*
var task = Object.create(Object.prototype);

task.title = 'My task';
task.description = 'My description';
task.toString = function() {
    return this.title + ' ' + this.description;
};

console.log(task.toString());
*/

/////////////////
// defineProperty - writable false
/////////////////

/*
var task = Object.create(Object.prototype);

task.title = 'My task';
task.description = 'My description';

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: true,
    configurable: true
});

task.toString = 'hi';

console.log(task.toString());

console.log(Object.keys(task));
*/

/////////////////
// defineProperty - enumerable & configurable
/////////////////
/*
var task = Object.create(Object.prototype);

task.title = 'My task';
task.description = 'My description';

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

// this will throw an error, since configurable has been set to false
// Object.defineProperty(task, 'toString', {
//     enumerable: true
// });

console.log(task);

console.log(Object.keys(task));
*/

/////////////////
// inheritance - Object.create allows "overwriting" properties since it's a new object
/////////////////

var task = Object.create(Object.prototype);

task.title = 'My task';
task.description = 'My description';

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function() {
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
});
console.log(urgentTask.toString());
