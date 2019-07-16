let addButton = document.getElementById("addButton")
let todoTextBox = document.getElementById("todoTextBox")

let pendingTasksDiv = document.getElementById("pendingTasks")

addButton.addEventListener("click", function () {
    console.log("Button is being fired....")
    // grabs the value of text box
    let todo = todoTextBox.value

    // creates a div
    let pendingTasksDIV = document.createElement("div")
    pendingTasksDIV.className = "tasksDiv"

    // creates a checkbox
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    // creates a p
    let todoParagraph = document.createElement("p")
    todoParagraph.innerHTML = todo
    todoParagraph.className = "tasksParagraph"

    //creates button
    let todoLinkRemove = document.createElement("a")
    todoLinkRemove.className = "linkStyle"
    todoLinkRemove.text = "Remove"

    // puts checkbox inside the div
    pendingTasksDIV.appendChild(checkbox)
    // puts the paragraph element into the pendingTaks div
    pendingTasksDIV.appendChild(todoParagraph)
    pendingTasksDIV.appendChild(todoLinkRemove)
    // grabs the div pendingTasks and adds a div to it
    pendingTasksDiv.appendChild(pendingTasksDIV)

})