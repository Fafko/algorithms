'use strict';

const AbstractBinaryHeap = require('./AbstractBinaryHeap');

/**
 * Class representing a heap which
 * has the least element in the root
 * @extends AbstractBinaryHeap
 */
class MinHeap extends AbstractBinaryHeap{

  /**
   * Create a min-heap
   * @param {Array<number>} values
   */
  constructor(values) {
    super(values);
  }

  /**
   * Add element to heap and rebuild if heap is wrong
   * @param {number} element
   * @returns {MinHeap}
   */
  addElement(element) {
    this._heap.push(element);
    let elementIndex = this.getSize() - 1;
    let parentIndex = Math.floor((elementIndex - 1) / 2);

    while (elementIndex > 0 && this._heap[parentIndex] > this._heap[elementIndex]) {
      this._swap(parentIndex, elementIndex);
      elementIndex = parentIndex;
      parentIndex = Math.floor((elementIndex - 1) / 2);
    }
    return this;
  }

  /**
   * Return min heap element
   * @returns {number}
   */
  getMinElement() {
    return this._getTopElement();
  }

  /**
   * Delete and return min heap element
   * @returns {number}
   */
  removeMinElement() {
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
      let leastIndex = index;

      if (this._heap[leastIndex] > this._heap[leftChildIndex])
        leastIndex = leftChildIndex;

      if (rightChildIndex < this.getSize() && this._heap[leastIndex] > this._heap[rightChildIndex])
        leastIndex = rightChildIndex;

      if (index === leastIndex) {
        return;
      }

      this._swap(index, leastIndex);

      index = leastIndex;

    }

  }

}

module.exports = MinHeap;
