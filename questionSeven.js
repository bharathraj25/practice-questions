
// Regular function
function concateStringsInArrayRegular(sArray) {

    let concateResultString = ""
    sArray.forEach(string => {
        concateResultString = concateResultString.concat(string.slice(1))
    });

    return concateResultString
}

// Arrow function
const concateStringsInArrayArrow = sArray => {

    let concateResultString = ""
    sArray.forEach(string => {
        concateResultString = concateResultString.concat(string.slice(1))
    });

    return concateResultString
}

const sampleInput = ["code", "academy"]
console.log(concateStringsInArrayRegular(sampleInput))
console.log(concateStringsInArrayArrow(sampleInput))