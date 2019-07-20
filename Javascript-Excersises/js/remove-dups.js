
let names = ["Alex", "Mary", "John", "Mary", "Alex", "Jerry"]
let duplicateFreeArray = []

function doesNameExists(name) {
    let alreadyExists = false
    for (let index = 0; index < duplicateFreeArray.length; index++) {
        if (name == duplicateFreeArray[index]) {
            alreadyExists = true
            break
        }
    }
    return alreadyExists
}

for (let index = 0; index < names.length; index++) {
    let name = names[index]
    // if the name does not exists in duplicateFreeArray
    if (!doesNameExists(name)) {
        duplicateFreeArray.push(name)
    }
}

console.log(duplicateFreeArray)

//console.log(!false)