// responsible for all DB calls

/*var repo = function() {

    var db = {};

    // every method that gets called below has access to up to db, for example

    return {
        get: function(id) {
            console.log('Getting task ' + id);
            return {
                name: 'new task from db'
            };
        },
        save: function(task) {
            console.log('Saving ' + task.name + ' to db');
        }
    };


};

module.exports = repo();*/


// revealing module pattern
var repo = function() {

    var db = {};

    // every method that gets called below has access to up to db, for example
    var get = function(id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        };
    };

    var save = function(task) {
        console.log('Saving ' + task.name + ' to db');
    };

    console.log('newing up a task repo');
    return {
        get: get,
        save: save
    };


};

module.exports = repo();
