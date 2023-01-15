
// Regular function
function replaceNextCharacterRegular(string) {
    
    let resString = "", nextLetter
    for(let c = 0; c < string.length; c++) {
        nextLetter = String.fromCharCode(1 + string[c].charCodeAt(0))

        if(nextLetter == "{")
            resString = resString.concat("a")
        else
            resString = resString.concat(nextLetter)
    }

    return resString
}

const sampleInput = "lazyinterns"
console.log(replaceNextCharacterRegular(sampleInput))