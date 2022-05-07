function gradingStudents(grades) {
  let result = [];

  for (let index in grades) {
    let grade = grades[index];
    let nextMultipleOfFive = Math.ceil(grade / 5) * 5;
    let difference = nextMultipleOfFive - grade;
    let newGrade = difference < 3 && grade >= 38 ? nextMultipleOfFive : grade;
    result[index] = newGrade;
  }
  return result;
}

test("gradingStudents", function () {
  expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
});
