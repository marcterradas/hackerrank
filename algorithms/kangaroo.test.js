// function kangaroo(x1, v1, x2, v2) {
//   const MAX_LENGTH = 10000;
//   let result = "NO";
//   let isPossible = false;

//   while (!isPossible) {
//     if (x1 == x2) {
//       console.log(x1, x2);
//       result = "YES";
//       isPossible = true;
//     }

//     x1 += v1;
//     x2 += v2;
//   }

//   return result;
// }

function kangaroo(x1, v1, x2, v2) {
  let result = "YES";
  let jump = (x2 - x1) / (v2 - v1);

  if ((x1 > x2 && v1 >= v2) || (x2 > x1 && v2 >= v1)) {
    result = "NO";
    return result;
  }

  result = jump % 1 === 0 ? "YES" : "NO";
  return result;
}

test("kangaroo", function () {
  expect(kangaroo(0, 3, 4, 2)).toBe("YES");
});

test("kangaroo", function () {
  expect(kangaroo(0, 2, 5, 3)).toBe("NO");
});

test("kangaroo", function () {
  expect(kangaroo(4523, 8092, 9419, 8076)).toBe("YES");
});
