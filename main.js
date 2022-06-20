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

const todoTasks = toDos.map(function(tasksList){
    return tasksList.task;
});

console.log(todoTasks);