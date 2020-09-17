//ARRAY DIFFERENCES

const arrayDiffs = (arr1, arr2) => {
  let uniqueNums = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      uniqueNums.push(arr1[i]);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (!arr1.includes(arr2[j])) {
      uniqueNums.push(arr2[j]);
    }
  }
  return uniqueNums;
};

console.log(arrayDiffs([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5]));

module.exports = {
  arrayDiffs,
};
