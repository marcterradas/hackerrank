/*
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */
function diagonalDifference(array) {

    let leftToRight = 0;
    let rightToLeft = 0;

    for (let index = 0; index < array.length; index++) {

        let leftToRightValue = array[index][index];
        let rightToLeftValue = array[index][(array.length - 1) - index];

        leftToRight += leftToRightValue;
        rightToLeft += rightToLeftValue;
    }

    const result = Math.abs(leftToRight - rightToLeft);

    return result;
}

test('diagonalDifference', function() {
    const array = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ]
    expect(diagonalDifference(array)).toBe(15);
})