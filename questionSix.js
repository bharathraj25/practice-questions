
const postfixString = "Script"

// Regular function
function checkIfMatchPostfixRegular(string) {

    let stringLength = string.length
    if(stringLength >= 6 && string.indexOf(postfixString) == stringLength - 6){
        return true
    }
    return false
}

// Arrow function
const checkIfMatchPostfixArrow = string => {
    let stringLength = string.length
    if(stringLength >= 6 && string.indexOf(postfixString) == stringLength - 6){
        return true
    }
    return false
}

const sampleInput = "javaScript"
console.log(checkIfMatchPostfixRegular(sampleInput))
console.log(checkIfMatchPostfixArrow(sampleInput))