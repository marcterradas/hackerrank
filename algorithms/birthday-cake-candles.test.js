
function birthdayCakeCandles(candles) {
    const biggestNumber = Math.max(...candles);
    const arrBiggestNumber = candles.filter((number) => number === biggestNumber);
    return arrBiggestNumber.length;
}

test("birthdayCakeCandles", function () {
  expect(birthdayCakeCandles([3, 2, 1, 3])).toBe(2);
});
