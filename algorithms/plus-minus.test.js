/*
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. (6 decimal)
 */
function plusMinus( array ){
    const numberElements = array.length;

    let positiveNumber = 0
    let negativeNumber = 0
    let zeroNumber = 0

    for(let index = 0; index < numberElements; index++){
        if(array[index] > 0) positiveNumber++
        else if(array[index] < 0) negativeNumber++
        else zeroNumber++
    }

    const positivePercentage = (positiveNumber / numberElements).toFixed(6)
    const negativePercentage = (negativeNumber / numberElements).toFixed(6)
    const zeroPercentage = (zeroNumber / numberElements).toFixed(6)
    const result = [positivePercentage, negativePercentage, zeroPercentage]

    return result
}


test('plus-minus',function(){
    const array = [-4, 3, -9, 0, 4, 1]
    expect(plusMinus(array)).toEqual([ '0.500000', '0.333333', '0.166667' ])
})