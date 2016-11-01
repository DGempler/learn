/*var Task = function(name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function() {
    console.log('completing Task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var UrgentTask = function(name, priority) {
        Task.call(this, name);
        this.priority = priority;
};

var ut = new UrgentTask('This is urgent', 1);
console.log(ut);*/
// the above will work, but we don't have access to prototype (i.e., the complete method)
// Therefore, we can assign UrgentTask prototype to Task prototype, but it will tie the two together
// better to assign UrgentTask prototype to Object.create(Task.prototype);

var Task = function(name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function() {
    console.log('completing Task: ' + this.name);
    this.completed = true;
};

Task.prototype.save = function() {
    console.log('saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

var UrgentTask = function(name, priority) {
        Task.call(this, name);
        this.priority = priority;
};
UrgentTask.prototype = Object.create(Task.prototype);

// now modify prototype methods
UrgentTask.prototype.notify = function() {
    console.log('notifying important people');
};

UrgentTask.prototype.save = function() {
    this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this);
};

var ut = new UrgentTask('This is urgent', 1);

ut.complete();
ut.save();
console.log(ut);
