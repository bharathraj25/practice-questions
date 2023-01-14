
// Regular function
function ifAllDigitSameRegular(number) {
    const sNumberArray = number.toString().split("")

    let firstDigit, isSame = true
    sNumberArray.forEach(digit => {
        if(!isSame){
            return
        }
        if(firstDigit === undefined){
            firstDigit =  digit
        }
        else{
            if(digit != firstDigit){
                isSame = false
            }
        }

    });

    return isSame
}

// Arrow function
const ifAllDigitSameArrow = number => {
    const sNumberArray = number.toString().split("")

    let firstDigit, isSame = true
    sNumberArray.forEach(digit => {
        if(!isSame){
            return
        }
        if(firstDigit === undefined){
            firstDigit =  digit
        }
        else{
            if(digit != firstDigit){
                isSame = false
            }
        }

    });

    return isSame
}

const sampleInput = 22
console.log(ifAllDigitSameRegular(sampleInput))
console.log(ifAllDigitSameArrow(sampleInput))