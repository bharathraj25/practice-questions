
const postfixString = "Script"

// Regular function
function checkIfMatchPostfixRegular(string) {

    let stringLength = string.length
    if(stringLength >= 6 && string.indexOf(postfixString) == stringLength - 6){
        return true
    }
    return false
}

const sampleInput = "javaScript"
console.log(checkIfMatchPostfixRegular(sampleInput))