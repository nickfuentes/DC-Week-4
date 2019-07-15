let array = [6, 3, 21, 89, 10, 32, 9]

function largest() {
    largest_num = 0
    for (let index = 0; index < array.length; index++) {
        if (largest_num < array[index]) {
            largest_num = array[index]
        }
    }
    console.log(`The largest number in the array is ${largest_num}!`)
}

largest()