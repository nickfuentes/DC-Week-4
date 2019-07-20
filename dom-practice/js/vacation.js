function saveVacationInfo() {
    console.log("saveVacationInfo")
}


let saveButton = document.getElementById("saveButton")
let cityTextBox = document.getElementById("cityTextBox")
let cityImageUrl = document.getElementById("cityImageUrl")
let vacationListDiv = document.getElementById("vacationListDiv")
// using anonymous function is only clicked here and not anywhere else
saveButton.addEventListener("click", function () {
    console.log("button click fired...")

    let city = cityTextBox.value
    let cityImageURL = cityImageUrl.value

    let vacationDiv = document.createElement("div")

    vacationListDiv.appendChild(vacationDiv)

});



