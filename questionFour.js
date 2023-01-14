
// Regular function
function getLongestStringRegular(sArray) {
    let longestString = ""
    sArray.forEach(string => {
        if(string.length > longestString.length) {
            longestString = string
        }
    });

    return longestString
}

// Arrow function
const getLongestStringArrow = sArray => {
    let longestString = ""
    sArray.forEach(string => {
        if(string.length > longestString.length) {
            longestString = string
        }
    });

    return longestString
}

const sampleInput = ["we", "love", "code", "academy"]
console.log(getLongestStringRegular(sampleInput))
console.log(getLongestStringArrow(sampleInput))