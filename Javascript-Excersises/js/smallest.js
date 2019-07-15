let array = [6, 3, 21, 89, 1, 10, 32, 9]

function smallest() {
    smallest_num = array[0]
    for (let index = 1; index < array.length; index++) {
        if (smallest_num > array[index]) {
            smallest_num = array[index]
        }
    }
    console.log(`The smallest number in the array is ${smallest_num}!`)
}

smallest()