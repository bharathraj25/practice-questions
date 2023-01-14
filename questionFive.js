
// Regular function
function checkIfLeapYearRegular(year) {
    if((year%4==0) && ((year%400==0) || (year%100!==0))) {
        return true
    }
    return false
}

// Arrow function
const checkIfLeapYearArrow = year => {
    if((year%4==0) && ((year%400==0) || (year%100!==0))) {
        return true
    }
    return false
}

const sampleInput = 2000
console.log(checkIfLeapYearRegular(sampleInput))
console.log(checkIfLeapYearArrow(sampleInput))