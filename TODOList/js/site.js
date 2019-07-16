let addButton = document.getElementById("addButton")
let todoTextBox = document.getElementById("todoTextBox")

let pendingTasksDiv = document.getElementById("pendingTasks")
let completedTasks = document.getElementById("completedTasks")

// Adds div to DOM, checkbox, h3, a into div 
addButton.addEventListener("click", function () {

    // grabs the value of text box
    let todo = todoTextBox.value

    // creates a div
    let pendingTasksDIV = document.createElement("div")
    pendingTasksDIV.className = "tasksDiv"
    // creates a checkbox
    let checkbox = document.createElement("input")
    checkbox.className = "checkbox"
    checkbox.type = "checkbox"
    checkbox.addEventListener("click", moveList)
    // creates a h3
    let todoParagraph = document.createElement("h3")
    todoParagraph.innerHTML = todo
    todoParagraph.className = "tasksParagraph"
    //creates button
    let todoLinkRemove = document.createElement("a")
    todoLinkRemove.className = "link"
    todoLinkRemove.text = "Remove"
    todoLinkRemove.addEventListener("click", removeTodo)

    // grabs the div pendingTasks and adds a div to it
    pendingTasksDiv.appendChild(pendingTasksDIV)
    // puts checkbox inside the div
    pendingTasksDIV.appendChild(checkbox)
    // puts the paragraph element into the pendingTaks div
    pendingTasksDIV.appendChild(todoParagraph)
    // adds remove link to div
    pendingTasksDIV.appendChild(todoLinkRemove)

})

// removes item grabs the parent element of the link remove and removes it
function removeTodo() {
    this.parentElement.parentElement.removeChild
        (this.parentElement)
}

// completes the task and moves to other list
function moveList() {
    if (this.checked) {
        completedTasks.appendChild(this.parentElement)
    } else {
        pendingTasks.appendChild(this.parentElement)
    }
}
