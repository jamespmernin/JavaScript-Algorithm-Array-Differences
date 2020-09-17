//ARRAY DIFFERENCES

const arrayDiffs = (arr1, arr2) => {
  let uniqueNums = [];

  arr1.forEach((num) => {
    (arr2.includes(num)) ? null : uniqueNums.push(num);
  })

  arr2.forEach((num) => {
    (arr1.includes(num)) ? null : uniqueNums.push(num);
  })

  return uniqueNums;
};

console.log(arrayDiffs([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5]));

module.exports = {
  arrayDiffs,
};
