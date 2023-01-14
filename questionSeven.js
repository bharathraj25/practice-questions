
// Regular function
function concateStringsInArrayRegular(sArray) {

    let concateResultString = ""
    sArray.forEach(string => {
        concateResultString += string.slice(1)
    });

    return concateResultString
}

const sampleInput = ["code", "academy"]
console.log(concateStringsInArrayRegular(sampleInput))