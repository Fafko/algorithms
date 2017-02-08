'use strict';

/**
 * BinaryTreeNode representing class
 */
class BinaryTreeNode {

  /**
   * Create an instance
   * @param {*} key
   * @param {*} value
   */
  constructor(key, value) {

    /**
     * @member {*} 
     * @private
     */
    this._key = key;

    /**
     * @member {*}
     * @private
     */
    this._value = value;

    /**
     * @member {BinaryTreeNode|null}
     * @private
     */
    this._left = null;

    /**
     * @member {BinaryTreeNode|null}
     * @private
     */
    this._right = null;
  }

  /**
   * Return node key
   * @returns {*}
   */
  getKey() {
    return this._key;
  }

  /**
   * Set node key to given one
   * @param {*} key
   */
  setKey(key) {
    this._key = key;
  }

  /**
   * Return node key
   * @returns {*}
   */
  getValue() {
    return this._value;
  }

  /**
   * Set node value to given one
   * @param {*} value
   */
  setValue(value) {
    this._value = value;
  }

  /**
   * Get node left child
   * @returns {BinaryTreeNode|null}
   */
  getLeftChild() {
    return this._left;
  }

  /**
   * Set left child to given value
   * @param {BinaryTreeNode|null} node
   */
  setLeftChild(node) {
    this._left = node;
  }

  /**
   * Get node right child
   * @returns {BinaryTreeNode|null}
   */
  getRightChild() {
    return this._right;
  }

  /**
   * Set right child to given value
   * @param {BinaryTreeNode|null} node
   */
  setRightChild(node) {
    this._right = node;
  }
  
}

module.exports = BinaryTreeNode;
