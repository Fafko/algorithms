'use strict';

/**
 * AbstractBinaryHeap class
 * @abstract
 */
class AbstractBinaryHeap {

  /**
   * Create an instance
   * @param {Array<number>} values
   */
  constructor(values) {
    /**
     * @member {Array<number>}
     * @protected
     */
    this._heap = values;
    this._buildHeap();
  }

  /**
   * Return heap values separated with separator
   * @param {string} [separator=]
   * @returns {string}
   */
  getValues(separator) {
    return this._heap.join(separator || ' ');
  }

  /**
   * Return heap size
   * @returns {number}
   */
  getSize() {
    return this._heap.length;
  }

  /**
   * Return heap height
   * @returns {number}
   */
  getHeight() {
    return Math.ceil(Math.log2(this.getSize() + 1));
  }
  
  /**
   * Rebuild heap from the given index
   * @abstract
   * @protected
   * @returns {void}
   */
  _heapify(index) {};
  
  /**
   * Build heap from the source array
   * @private
   * @returns {void}
   */
  _buildHeap() {
    let start = Math.floor((this.getSize() - 2) / 2);
    while (start >= 0) {
      this._heapify(start);
      start -= 1;
    }
  }
  
  /**
   * Return the highest heap element
   * @protected
   * @returns {number}
   */
  _getTopElement() {
    return this._heap[0];
  }

  /**
   * Remove and return the highest heap element
   * @protected
   * @returns {number}
   */
  _removeTopElement() {
    let element = this._heap[0];
    this._heap[0] = this._heap.pop();
    this._heapify(0);
    return element;
  }

  /**
   * Swap heap values with given indices
   * @param {number} aIndex
   * @param {number} bIndex
   * @protected
   * @returns {AbstractBinaryHeap}
   */
  _swap(aIndex, bIndex) {
    let temp = this._heap[aIndex];
    this._heap[aIndex] = this._heap[bIndex];
    this._heap[bIndex] = temp;
    return this;
  }
  
}

module.exports = AbstractBinaryHeap;
