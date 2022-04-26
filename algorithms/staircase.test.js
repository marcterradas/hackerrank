function staircase(stairCaseLength) {
  let arrResult = [];

  for (let index = 1; index <= stairCaseLength; index++) {
    let newElement = "";
    let numberOfSpaces = stairCaseLength - index;

    newElement = newElement.padStart(numberOfSpaces, " ");
    newElement = newElement.padEnd(stairCaseLength, "#");

    arrResult[index - 1] = newElement;
  }

  return arrResult;
}

test("staircase", function () {
  expect(staircase(6)).toEqual([
    "     #",
    "    ##",
    "   ###",
    "  ####",
    " #####",
    "######",
  ]);
});
