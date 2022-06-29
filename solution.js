// You must RETURN your result in each function!

function printNums(nums) {
  const newArr = [];
  nums.forEach((element) => {
    newArr.push(element);
  });
  return newArr;
}

function returnSums(nums) {
  const newArr = [];
  nums.forEach((n, index) => {
    newArr.push(n + index);
  });
  return newArr;
}

function returnTotal(objs) {
  let objsSum = 0;
  objs.forEach((element) => {
    objsSum += element.n;
  });
  return objsSum;
}

function printMoney(decimals) {
  const newArr = decimals.map((num) => {
    const dollars = `$` + num.toFixed(2);
    return dollars;
  });
  return newArr;
}

function returnAllTrueValues(values) {
  return (happy = values.filter((element) => {
    return element.happy;
  }));
}

function addTwo(nums) {
  return nums.reduce((acc, num) => {
    return acc + num + 2;
  }, 0);
}

function joinStrings(strings) {
  return strings.reduce((acc, n) => {
    return acc + n;
  });
}

//Bonus
function sortObjectsByValue(objs) {
  objs.sort(function (a, b) {
    return a - b;
  });
  objs.forEach((obj) => {
    return objs;
  });
}

/**
 * @param objs => [{value: 1}, {value:2}, {value:23}]
 * Using .sort, sort the array of objects by the value key in ascending order
 * .sort documentation https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
module.exports = {
  printNums,
  returnSums,
  returnTotal,
  printMoney,
  returnAllTrueValues,
  sortObjectsByValue,
  addTwo,
  joinStrings
};
