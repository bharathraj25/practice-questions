const vowels = ["a", "e", "i", "o", "u"]

// Regular function
function countVowelsRegular(string) {
    
    let vowelCount = 0
    for(let c = 0; c <= string.length; c++) {
        if(vowels.includes(string[c])){
            vowelCount += 1
        }
    }

    return vowelCount
}

const sampleInput = "codeacademy"
console.log(countVowelsRegular(sampleInput))