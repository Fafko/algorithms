'use strict';

const quickSort = (values, comparingFunction) => {
  sort(values, 0, values.length - 1, comparingFunction);
  return values;
};

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const sort = (values, lIndex, rIndex, comparingFunction) => {

  if (lIndex >= rIndex) return;

  let pivotIndex = getRandom(lIndex, rIndex);

  let temp = values[lIndex];
  values[lIndex] = values[pivotIndex];
  values[pivotIndex] = temp;

  let middleIndexes = partition(values, lIndex, rIndex, comparingFunction);
  sort(values, lIndex, middleIndexes[0] - 1, comparingFunction);
  sort(values, middleIndexes[1] + 1, rIndex, comparingFunction);

};

// Optimised partition function returns 
// array of middleIndexes for cases when 
// there are equal elements.
const partition = (values, lIndex, rIndex, comparingFunction) => {

  let pivot = values[lIndex],
    pivotStartIndex = lIndex,
    pivotEndIndex = lIndex,
    temp = null,
    i = lIndex + 1;

  for (; i <= rIndex; i += 1) {

    let comparedValue = values[i];

    let comparisonResult = comparingFunction(pivot, comparedValue);

    if (comparisonResult > 0) {
      temp = values[pivotEndIndex + 1];
      values[pivotEndIndex + 1] = pivot;
      values[pivotStartIndex] = comparedValue;

      if (i !== pivotEndIndex + 1) {
        values[i] = temp;
      }

      pivotStartIndex += 1;
      pivotEndIndex += 1;
    } else if (comparisonResult < 0) {
    } else {
      temp = values[pivotEndIndex + 1];
      values[pivotEndIndex + 1] = pivot;
      values[i] = temp;
      pivotEndIndex += 1;
    }

  }

  return [pivotStartIndex, pivotEndIndex];

};

module.exports = quickSort;
