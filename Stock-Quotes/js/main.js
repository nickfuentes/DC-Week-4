let textSymbolBox = document.getElementById("textSymbolBox")
let quoteListDiv = document.getElementById("mainDiv")
let searchButton = document.getElementById("searchButton")




searchButton.addEventListener("click", function () {

    let symbol = textSymbolBox.value

    // Prints the Quote to the screen when clicked
    prinToScreen()

    // Gets the quote and puts it into the html
    function prinToScreen() {
        let chosenQuote = getStockQuote(symbol)

        let insertQuote =
            `
                            <div class="namePrice">
                                <p>Name: ${chosenQuote.name}</p>
                                <p>Price: ${chosenQuote.price}</p>
                            </di>
                            `
        quoteListDiv.innerHTML = insertQuote
    }

    // Set Interval Timer to insert into HTML every 3 seconds.
    let timer = setInterval(prinToScreen, 3000);

})



