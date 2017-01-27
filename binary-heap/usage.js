"use strict";

const MaxHeap = require('./MaxHeap');
const MinHeap = require('./MinHeap');

let maxHeap = new MaxHeap([6, 0, 7, -1, 5, 7, 2, 4, 1, 9, 8]);
let minHeap = new MinHeap([6, 0, 7, -1, 5, 7, 2, 4, 1, 9, 8]);


console.log(`Max heap:`);
console.log(`Heap values: ${maxHeap.getValues()}`);
console.log(`Heap height: ${maxHeap.getHeight()}`);
console.log(`Heap size: ${maxHeap.getSize()}`);
console.log(`Heap max element: ${maxHeap.getMaxElement()}`);
console.log(`Remove heap max element: ${maxHeap.removeMaxElement()}`);
console.log(`Add value [13] to the heap: ${maxHeap.addElement(13).getValues()}`);
console.log('\n\n');


console.log('Min heap:');
console.log(`Heap values: ${minHeap.getValues()}`);
console.log(`Heap height: ${minHeap.getHeight()}`);
console.log(`Heap size: ${minHeap.getSize()}`);
console.log(`Heap min element: ${minHeap.getMinElement()}`);
console.log(`Remove heap min element: ${minHeap.removeMinElement()}`);
console.log(`Add value [-2] to the heap: ${minHeap.addElement(-2).getValues()}`);
