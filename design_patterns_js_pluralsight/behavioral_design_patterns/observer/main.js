var Task = require('./task');

var notificationService = function() {
    var message = 'Notifying ';
    this.update = function(task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};

var loggingService = function() {
    var message = 'Logging ';
    this.update = function(task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};

var auditingService = function() {
    var message = 'Auditing ';
    this.update = function(task) {
        console.log(message + task.user + ' for task ' + task.name);
    };
};

// Create our observers (observer list)
function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.get = function(index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

// go through motions - add helper methods to protect array a little bit
ObserverList.prototype.count = function() {
    return this.observerList.length;
};

// add ability to remove
ObserverList.prototype.removeAt = function(index) {
    this.observerList.splice(index, 1);
};

ObserverList.prototype.indexOf = function(obj, startIndex) {
    var i = startIndex;

    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }

    return -1;
};

// wrap task with a Subject, with a decorator (since Task already works, don't want to mess with it by adding anything)
var ObservableTask = function(data) {
    Task.call(this, data);
    this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function(observer) {
    this.observers.add(observer);
};

ObservableTask.prototype.removeObserver = function(observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
};

ObservableTask.prototype.notify = function(context) {
    var observerCount = this.observers.count();
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i)(context);
    }
};

// now overwrite save method on task
ObservableTask.prototype.save = function() {
    this.notify(this);
    Task.prototype.save.call(this);
};

// act
// var task1 = new Task({name: 'create a demo for constructors', user: 'Jon'});
var task1 = new ObservableTask({name: 'create a demo for constructors', user: 'Jon'});


var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

// add observers
task1.addObserver(not.update);
task1.addObserver(ls.update);
task1.addObserver(audit.update);

task1.save();

task1.removeObserver(audit.update);
task1.save();
