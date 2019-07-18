let timeTextBox = document.getElementById("timeTextBox")
let startButton = document.getElementById("startTimerButton")
let stopButton = document.getElementById("stopTimerButton")
let mainTimeDiv = document.getElementById("mainTimerDiv")


startButton.addEventListener("click", function () {

    let time = timeTextBox.value

    mainTimeDiv.innerHTML = time

    var timer = setInterval(myTimer, 1000);

    function myTimer() {
        if (time > 0) {
            mainTimeDiv.innerHTML = time--
        }
        else if (time <= 0) {
            mainTimeDiv.innerHTML = `DONE!`
        }
    }

    stopButton.addEventListener("click", function (timeNow) {

        clearInterval(timer);
    })

})

