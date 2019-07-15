
let num1 = 60
let num2 = 50

function compute(a, b) {
    let result = a + b

    if (result >= 50 && result <= 80)
        return 65
    else {
        return 80
    }
}

let result = compute(34, 56)
console.log(result)

/*
if (num1 >= 50 && num1 <= 80) {
    console.log(65)
}
else {
    console.log(80)
}


if (num2 >= 50 && num2 <= 80) {
    console.log(65)
}
else {
    console.log(80)
}


function findNum(num1, num2) {
    if (num1 >= 50 && num1 <= 80) {
        console.log(65)
    }
    else {
        console.log(80)
    }

    if (num2 >= 50 && num2 <= 80) {
        console.log(65)
    }
    else {
        console.log(80)
    }
}

findNum(60, 100)
*/
