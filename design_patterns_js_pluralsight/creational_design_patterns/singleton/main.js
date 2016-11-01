var taskHandler = require('./taskHandler');
// var repo = require('./repo');
// var myrepo = repo();
// or var repo = require('./repo')();

// using singleton
var myrepo = require('./repo');

myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');
taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
