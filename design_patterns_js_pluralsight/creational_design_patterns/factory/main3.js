// with repo, that runs like gulp-load-plugins
var Task = require('./task');
var repo = require('./repoFactory2');

var task1 = new Task(repo.task.getRepo('task').get(1));
var task2 = new Task(repo.task.getRepo('task').get(2));

var user = repo.user.get(1);
var project = repo.user.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
