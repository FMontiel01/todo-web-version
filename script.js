function getTaskList() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks === null){
        return [];
    }
    else {
        return JSON.parse(savedTasks);
    }
}

let addTask = document.getElementById("AddTask");
let addTaskButton = document.getElementById("AddTaskButton");

addTaskButton.addEventListener("click", function(){
    const tasks = addTask.value;
    let tasklist = getTaskList();
     tasklist.push(tasks);
     localStorage.setItem("tasks", JSON.stringify(tasklist));
});

let viewTaskButton = document.getElementById("ViewTasksButton");

viewTaskButton.addEventListener("click", function(){
    let tasklist = getTaskList();

    const selectElement = document.getElementById("DeleteTasks");
    const ViewTaskContainer = document.getElementById("ViewTasks");
    ViewTaskContainer.innerHTML = "";

    selectElement.innerHTML = "";

    for (const task of tasklist){
        const newDiv = document.createElement("div");
        newDiv.textContent = task;
        ViewTaskContainer.appendChild(newDiv);
        const newOption = document.createElement("option");
        newOption.value = tasklist.indexOf(task);
        newOption.textContent = task;
        selectElement.appendChild(newOption);

    }
});

let DeleteTaskButton = document.getElementById("DeleteTaskButton");

DeleteTaskButton.addEventListener("click", function(){
    const deleteSelect = document.getElementById("DeleteTasks");
    const selectedIndex = deleteSelect.value;
    let tasklist = getTaskList();
    tasklist.splice(selectedIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasklist));

});