function countBs(word) {
    let count = 0
    for (character of word) {
        if(character === "B")count++
    }
    return count
}

function countChar(word, char) {
    let count = 0
    for (character of word) {
        if(character === char)count++
    }
    return count
}

console.log(countBs("BBC"))
console.log(countBs("Bruno"))
console.log(countBs("bruno"))
console.log(countChar("kakkerlak", "k"));
console.log(countChar("larissa", "a"));
module.exports = {
    countBs,
    countChar
}