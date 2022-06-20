const toDos = [
    {
        no: 1,
        task: 'workout',
        isCompleted: true
    },

    {
        no: 2,
        task: 'breakfast',
        isCompleted: false
    },

    {
        no: 3,
        task: 'go to office',
        isCompleted: true
    }
];

const completedTasks = toDos.filter(function(completedTasksList){
    return completedTasksList.isCompleted === true;
}).map(function(completedTasksNames){
    return completedTasksNames.task;
});

console.log(completedTasks);