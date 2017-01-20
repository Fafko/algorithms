'use strict';

const mergeSort = (values, comparingFunction) =>
  sort(values, comparingFunction);

const sort = (values, comparingFunction) => {

  if (values.length === 1) return values;

  let middleIndex = Math.floor(values.length / 2);
  let leftValues = sort(values.slice(0, middleIndex), comparingFunction);
  let rightValues = sort(values.slice(middleIndex), comparingFunction);

  return merge(leftValues, rightValues, comparingFunction);

};

const merge = (leftValues, rightValues, comparingFunction) => {

  let result = [];

  while (leftValues.length && rightValues.length) {

    let comparisonResult = comparingFunction(leftValues[0], rightValues[0]);

    if (comparisonResult > 0) {
      result.push(rightValues.shift());
    } else if (comparisonResult < 0) {
      result.push(leftValues.shift());
    } else {
      result.push(leftValues.shift(), rightValues.shift());
    }
    
  }

  return result.concat(leftValues, rightValues);

};

module.exports = mergeSort;
