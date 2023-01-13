
const postfixString = "Script"

// Regular function
function checkIfMatchPostfixRegular(string) {
    return string.endsWith(postfixString)
}

// Arrow function
const checkIfMatchPostfixArrow = string => {
    return string.endsWith(postfixString)

}

const sampleInput = "javaScript"
console.log(checkIfMatchPostfixRegular(sampleInput))
console.log(checkIfMatchPostfixArrow(sampleInput))