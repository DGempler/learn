var repo = function() {
    var called = 0;

    var save = function(task) {
        called++;
        console.log('Saving ' + task +
                  ' Called ' + called + ' times');
    };
    console.log('newing up task repo');
    return {
        save: save
    };
};

// module.exports = repo;

// creating a singleton of repo
// calling it will store an instance of this return object & closure around it (will stay the same)
// so can get rid of the invocation in the requires in other files
module.exports = repo();
