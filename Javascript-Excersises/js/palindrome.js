function reverseString(word) {
    let revword = "";
    for (let index = word.length - 1; index >= 0; index--) {
        revword = revword + word[index]
    }
    if (word == revword) {
        console.log(`Your Word: [${word}] Is A Palindrome!`)
    }
    else {
        console.log(`Your Word: [${word}] Is NOT Palindrome!`)
    }
}

console.log(reverseString("nickolas"))
