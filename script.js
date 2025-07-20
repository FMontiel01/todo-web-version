let addTask = document.getElementById("AddTask");
let addTaskButton = document.getElementById("AddTaskButton")

addTaskButton.addEventListener("click", function(){
    const tasks = addTask.value;
    let tasklist;

    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks === null){
        tasklist = [];
    }
    else {
       tasklist = JSON.parse(savedTasks);

    }
     tasklist.push(tasks)
     localStorage.setItem("tasks", JSON.stringify(tasklist))
});

let viewTaskButton = document.getElementById("ViewTasksButton")

viewTaskButton.addEventListener("click", function(){
    let viewTasks = localStorage.getItem("tasks")
    let tasklist;

    if (viewTasks === null){
        tasklist = []
    }
    else{
       tasklist = JSON.parse(viewTasks)
    }

});