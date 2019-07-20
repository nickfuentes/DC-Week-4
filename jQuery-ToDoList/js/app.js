$(document).ready(function () {

    // grabbing elements from DOM
    let todoTextBox = $("#todoTextBox")
    let addButton = $("#addButton")
    let pendingTodosDiv = $("#pendingTodosDiv")
    let completedTodosDiv = $("#completedTodosDiv")

    addButton.click(function () {

        // stores the value of the in the input box
        let todo = todoTextBox.val()

        // creates a div
        let pendingTodoList = $("<div>")
        pendingTodoList.addClass("pendingTodos")

        // creates checkbox
        let checkbox = $("<input/>").attr({ type: "checkbox" })
        checkbox.addClass("checkbox")


        // append checkbox into todoDiv
        pendingTodoList.append(checkbox)
        // append todoTitle into todoDiv
        pendingTodoList.append(todoTitle)

        // append todoDiv into mainDiv
        pendingTodosDiv.append(pendingTodoList)

    })

})