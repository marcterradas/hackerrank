function miniMaxSum(array) {
  array.sort();

  const minimumSum = array[0] + array[1] + array[2] + array[3];
  const maximumSum = array[4] + array[3] + array[2] + array[1];

  return [minimumSum, maximumSum];
}

test("miniMaxSum", function () {
  expect(miniMaxSum([1, 2, 3, 4, 5])).toEqual([10, 14]);
});
