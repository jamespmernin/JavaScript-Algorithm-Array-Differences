let algos = require("../arrayDiffs.js");

//ARRAY DIFFS
//return an array that includes all the numbers that are not in both arrays
test("return an array that includes all the numbers that are not in both arrays", () => {
  expect(
    algos.arrDifferences([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5])
  ).toMatchObject([44, 33, 4])
})

  