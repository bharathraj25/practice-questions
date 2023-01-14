
// Regular function
function reverseCapitalizationRegular(string) {
    let resString = ""
    for (let c = 0; c < string.length; c++ ) {

        // check if upperCase
        if(string[c].toUpperCase() == string[c]){
            resString += string[c].toLowerCase()
        }
        else {
            resString += string[c].toUpperCase()
        }
    }
    return resString
}

const sampleInput = "MeRRy hAD a LITTle lAMp"
console.log(reverseCapitalizationRegular(sampleInput))