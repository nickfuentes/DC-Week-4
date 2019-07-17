let dishesListDiv = document.getElementById("dishesListDiv")
let courseTitle = document.getElementById("courseTitle")

// buttons
let fullButton = document.getElementById("fullMenuButton")
let starterButton = document.getElementById("fullStartersButton")
let entreeButton = document.getElementById("fullEntreesButton")
let dessertButton = document.getElementById("fullDessertsButton")

// adds full list of menu on page
let dishesDiv = dishes.map(dish => {

    let dishDiv =

        `<div class="courseDiv">
        <div class="courseImg">
            <img src="${dish.imageURL}" />
        </div>
        <div class="courseTitleDescrip">
            <h2>${dish.title}</h2>
            <p>${dish.description}</p>
        </div>
        <div class="coursePrice">
            <p>${dish.price}</p>
        </div>
    </div>`
    return dishDiv

})

let fullMenuTitle = `<h1>Full Menu</h1>`

courseTitle.innerHTML = fullMenuTitle
dishesListDiv.innerHTML = dishesDiv.join("")

// (Full Button) 
fullButton.addEventListener("click", function () {
    let fullMenuTitle = `<h1>Full Menu</h1>`

    courseTitle.innerHTML = fullMenuTitle
    dishesListDiv.innerHTML = dishesDiv.join("")
})

// (Starter Button)
starterButton.addEventListener("click", function () {

    let filteredStarters = dishes.filter(function (starters) {
        return starters.course === "Starters"
    })

    // map through all the starters
    let starters = filteredStarters.map(dish => {

        let dishDiv =

            `<div class="courseDiv">
                <div class="courseImg">
                    <img src="${dish.imageURL}" />
                </div>
                <div class="courseTitleDescrip">
                    <h2>${dish.title}</h2>
                    <p>${dish.description}</p>
                </div>
                <div class="coursePrice">
                    <p>${dish.price}</p>
                </div>
            </div>`
        return dishDiv

    })
    let fullMenuTitle = `<h1>Starters</h1>`

    courseTitle.innerHTML = fullMenuTitle
    // enters the template litereal into the html
    dishesListDiv.innerHTML = starters.join("")

})

// (Entree Button)
entreeButton.addEventListener("click", function () {

    let filteredEntrees = dishes.filter(function (entrees) {
        return entrees.course === "Entrees"
    })

    // map through all the starters
    let entrees = filteredEntrees.map(dish => {

        let dishDiv =

            `<div class="courseDiv">
            <div class="courseImg">
                <img src="${dish.imageURL}" />
            </div>
            <div class="courseTitleDescrip">
                <h2>${dish.title}</h2>
                <p>${dish.description}</p>
            </div>
            <div class="coursePrice">
                <p>${dish.price}</p>
            </div>
        </div>`
        return dishDiv

    })
    let fullMenuTitle = `<h1>Entrees</h1>`

    courseTitle.innerHTML = fullMenuTitle
    dishesListDiv.innerHTML = entrees.join("")
})

// (Dessert Button)
dessertButton.addEventListener("click", function () {

    let filteredDesserts = dishes.filter(function (desserts) {
        return desserts.course === "Desserts"
    })

    let desserts = filteredDesserts.map(dish => {

        let dishDiv =

            `<div class="courseDiv">
                <div class="courseImg">
                    <img src="${dish.imageURL}" />
                </div>
                <div class="courseTitleDescrip">
                    <h2>${dish.title}</h2>
                    <p>${dish.description}</p>
                </div>
                <div class="coursePrice">
                    <p>${dish.price}</p>
                </div>
            </div>`
        return dishDiv

    })
    let fullMenuTitle = `<h1>Desserts</h1>`

    courseTitle.innerHTML = fullMenuTitle
    dishesListDiv.innerHTML = desserts.join("")

})