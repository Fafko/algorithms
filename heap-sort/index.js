'use strict';

const heapSort = (values, comparingFunction) =>
  sort(values, comparingFunction);

const sort = (values, comparingFunction) => {
  
  let heapSize = values.length - 1;
  
  buildHeap(values, heapSize, comparingFunction);
  
  while (heapSize >= 0) {
    
    swap(values, heapSize, 0);
    heapSize -= 1;
    siftDown(values, 0, heapSize, comparingFunction);
    
  }
  
  return values;
  
};

const buildHeap = (values, heapSize, comparingFunction) => {
  
  let start = Math.floor((heapSize - 1) / 2);
  
  while (start >= 0) {
    
    siftDown(values, start, heapSize, comparingFunction);
    start -= 1;
    
  }
  
};

const siftDown = (values, index, heapSize, comparingFunction) => {
  
  while (2 * index + 1 <= heapSize) {
    
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;
    let greatestIndex = index;
  
    if (comparingFunction(values[greatestIndex], values[leftChildIndex]) < 0) 
      greatestIndex = leftChildIndex;
  
    if (rightChildIndex <= heapSize && comparingFunction(values[greatestIndex], values[rightChildIndex]) < 0) 
      greatestIndex = rightChildIndex;
  
    if (index === greatestIndex) {
      return;
    }
  
    swap(values, index, greatestIndex);
    index = greatestIndex;
  
  }
  
};

const swap = (values, aIndex, bIndex) => {
  
  let temp = values[aIndex];
  values[aIndex] = values[bIndex];
  values[bIndex] = temp;

  return values;

};

module.exports = heapSort;
