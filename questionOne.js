
// Regular function
function getLargestEvenNumberRegular(nArray) {
    const largestNumber = Math.max(...nArray)
    if(largestNumber % 2 === 0){
        return largestNumber
    }
    return -1
}

const sampleInput = [1, 2, 3, 4, 5, 6, -3, -8, -11]
console.log(getLargestEvenNumberRegular(sampleInput))