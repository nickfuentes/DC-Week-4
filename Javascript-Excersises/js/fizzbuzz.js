function fizz_buzz() {
    for (let index = 1; index < 100 + 1; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            console.log(`${index} FIZZBUZZ!`)
        }
        else if (index % 3 == 0) {
            console.log(`${index} FIZZ!`)
        }
        else if (index % 5 == 0) {
            console.log(`${index} BUZZ!`)
        }
        else {
            console.log(index)
        }
    }
}

fizz_buzz()