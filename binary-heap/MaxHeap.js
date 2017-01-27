'use strict';

const AbstractBinaryHeap = require('./AbstractBinaryHeap');

/**
 * Class representing a heap which 
 * has the greatest element in the root
 * @extends AbstractBinaryHeap
 */
class MaxHeap extends AbstractBinaryHeap{

  /**
   * Create a max-heap
   * @param {Array<number>} values
   */
  constructor(values) {
    super(values);
  }

  /**
   * Add element to heap and rebuild if heap is wrong
   * @param {number} element
   * @returns {MaxHeap}
   */
  addElement(element) {
    this._heap.push(element);
    let elementIndex = this.getSize() - 1;
    let parentIndex = Math.floor((elementIndex - 1) / 2);

    while (elementIndex > 0 && this._heap[parentIndex] < this._heap[elementIndex]) {
      this._swap(parentIndex, elementIndex);
      elementIndex = parentIndex;
      parentIndex = Math.floor((elementIndex - 1) / 2);
    }
    return this;
  }

  /**
   * Return max heap element
   * @returns {number}
   */
  getMaxElement() {
    return this._getTopElement();
  }

  /**
   * Delete and return max heap element
   * @returns {number}
   */
  removeMaxElement() {
    return this._removeTopElement();
  }
  
  /**
   * Rebuild heap from given index
   * @param {number} index
   * @protected
   * @override
   * @returns {void}
   */
  _heapify(index) {

    while (2 * index + 1 < this.getSize()) {

      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let greatestIndex = index;

      if (this._heap[greatestIndex] < this._heap[leftChildIndex]) 
        greatestIndex = leftChildIndex;

      if (rightChildIndex < this.getSize() && this._heap[greatestIndex] < this._heap[rightChildIndex])
        greatestIndex = rightChildIndex;

      if (index === greatestIndex) {
        return;
      }

      this._swap(index, greatestIndex);
      
      index = greatestIndex;

    }
    
  }
  
}

module.exports = MaxHeap;
