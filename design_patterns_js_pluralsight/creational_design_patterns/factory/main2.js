// with repoFactory (a simple factory)
// this isn't ideal, because we end up "newing up" multiple instances of the repos, so we use the repoFactory with cache.
var Task = require('./task');
// var repoFactory = require('./repoFactory');
var repoFactory = require('./repoFactoryWithCache');

var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
