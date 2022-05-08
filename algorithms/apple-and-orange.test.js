function countApplesAndOranges(
  startPoint,
  endPoint,
  appleTree,
  orangeTree,
  apples,
  oranges
) {
  let numberOfApples = 0;
  let numberOfOranges = 0;

  for (let index in apples) {
    let applePosition = apples[index] + appleTree;
    if (applePosition >= startPoint && applePosition <= endPoint) {
      numberOfApples++;
    }
  }

  for (let index in oranges) {
    let orangePosition = oranges[index] + orangeTree;
    if (orangePosition >= startPoint && orangePosition <= endPoint) {
      numberOfOranges++;
    }
  }

  console.log(numberOfApples);
  console.log(numberOfOranges);
}

// tested directly in hackerrank
