function reverseString(word) {
    let revword;
    for (let index = word.length - 1; index >= 0; index--) {
        revword += word[index]
    }
    if (word == revword) {
        return `Your Word: [${word}] Is A Palindrome!`
    }
    else {
        return `Your Word: [${word}] Is NOT Palindrome!`
    }
}

console.log(reverseString("nickolas"))
