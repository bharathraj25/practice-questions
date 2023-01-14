
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

const sampleInput = ["we", "love", "code", "academy"]
console.log(getLongestStringRegular(sampleInput))