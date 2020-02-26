const arrDifferences = (arr1, arr2) => {
    let combo = arr1.concat(arr2)
    return combo.filter(function(num) {
      // console.log('num', num)
      if (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) return num
    })
  }

  console.log(arrDifferences([1, 44, 2, 3, 5], [33, 1, 2, 3, 4, 5]))
