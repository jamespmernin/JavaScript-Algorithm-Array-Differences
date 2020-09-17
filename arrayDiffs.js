//ARRAY DIFFERENCES

const arrayDiffs = (arr1, arr2) => {
  return arr1.filter((num) => !arr2.includes(num)).concat(arr2.filter((num) => !arr1.includes(num)));
};

console.log(arrayDiffs([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5]));

module.exports = {
  arrayDiffs,
};
