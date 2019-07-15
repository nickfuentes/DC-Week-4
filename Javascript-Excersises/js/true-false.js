let array = ["John", "Mary", "Alex", "Steve"]

function true_false(str) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === str) {
            return true
        }
    }
    return false
}

let answer = true_false("Martin")
console.log(answer)