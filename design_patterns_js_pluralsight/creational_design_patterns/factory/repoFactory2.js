var repoFactory = function() {
    var repos = this;

    // this list could come from a directory, for example go to directory
    // and look at all files in that directory, use file names to create repo names, etc
    var repoList = [
        {name: 'task', source: './taskRepository'},
        {name: 'user', source: './userRepository'},
        {name: 'project', source: './projectRepository'}
    ];

    repoList.forEach(function(repo) {
        repos[repo.name] = require(repo.source)();
    });

};

module.exports = new repoFactory();
