/*var Task = function(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

// not pretty!
var TaskService = function() {
    return {
        complete: function(task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function(task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function(task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name);
        },
        save: function(task) {
            console.log('saving Task: ' + task.name);
        }
    };
}();

var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
});

console.log(myTask);

// pretty bad API!
TaskService.complete(myTask);
if (myTask.completed) {
    TaskService.setCompleteDate(myTask);
    TaskService.notifyCompletion(myTask, myTask.user);
    TaskService.save(myTask);
}
console.log(myTask);
*/

// adding wrapper, not functionality
var Task = function(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

var TaskService = function() {
    return {
        complete: function(task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function(task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function(task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name);
        },
        save: function(task) {
            console.log('saving Task: ' + task.name);
        }
    };
}();

var TaskServiceWrapper = function() {
    var completeAndNotify = function(task) {
        TaskService.complete(myTask);
        if (myTask.completed) {
            TaskService.setCompleteDate(myTask);
            TaskService.notifyCompletion(myTask, myTask.user);
            TaskService.save(myTask);
        }
    };
    return {
        completeAndNotify: completeAndNotify
    };
}();

var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
});

console.log(myTask);

TaskServiceWrapper.completeAndNotify(myTask);
console.log(myTask);
