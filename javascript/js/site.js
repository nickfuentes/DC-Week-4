// How to print to the console in the browser or terminal
console.log("Hello World!")

// Variables and constants
var age = 23 // Vanilla 
//let name = "Nickolas" // ES6 syntax

const pi = 3.142 // Constant does not change over time

// functions

function greet() {
    console.log("Greeting!")
}

// caliing a function
greet()

function add(a, b) {
    result = a + b
    return result
}

let answer = add(2, 3)
console.log(answer)

// loops

for (let index = 1; index <= 10; index++) {
    console.log(index)
}

//arrays

let name = ["Alex", "Nickolas", "Mike"]

for (let index = 0; index < names.length; index++) {
    console.log(names[index])
}