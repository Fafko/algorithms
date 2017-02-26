'use strict';

const BinaryTreeNode = require('./BinaryTreeNode');

/**
 * BinarySearchTree representing class
 */
class BinarySearchTree {

  /**
   * Create an instance
   */
  constructor() {

    /**
     * Root of the tree
     * @member {BinaryTreeNode|null}
     * @private
     */
    this._root = null;
  }

  /**
   * Add new key/value pair to the tree
   * @param {*} key
   * @param {*} value
   * @returns {BinarySearchTree}
   */
  add(key, value) {
    
    this._root = this._root 
      ? this._root.add(key, value)
      : new BinaryTreeNode(key, value);
    
    return this;
  }

  /**
   * Get value by the given key
   * @param {*} key
   * @returns {*}
   */
  get(key) {
    
    let comparableNode = this._root;
    
    while (comparableNode) {
      if (comparableNode.getKey() === key) {
        return comparableNode.getValue();
      }
      comparableNode = comparableNode.getKey() > key 
        ? comparableNode.getLeftChild() 
        : comparableNode.getRightChild();
    }
    
    return null;
  }

  /**
   * Delete key/value pair by the given key
   * @param {*} key
   * @returns {BinarySearchTree}
   */
  remove(key) {
    
    if (this._root) 
      this._root.remove(key);
    
    return this;
  }
  
  /**
   * Clear the tree
   * @returns {void}
   */
  clear() {
    this._root = null;
  }

  /**
   * Traverse tree in the next order: root => leftChild => rightChild
   * @param {Function} callback
   * @returns {BinarySearchTree}
   */
  preOrderTraversal(callback) {
    this._root && this._root.preOrderTraversal(callback);
    return this;
  };

  /**
   * Traverse tree in the next order: leftChild => rightChild => root
   * @param {Function} callback
   * @returns {BinarySearchTree}
   */
  postOrderTraversal(callback) {
    this._root && this._root.postOrderTraversal(callback);
    return this;
  };

  /**
   * Traverse tree in the next order: leftChild => root => rightChild
   * @param {Function} callback
   * @returns {BinarySearchTree}
   */
  inOrderTraversal(callback) {
    this._root && this._root.inOrderTraversal(callback);
    return this;
  };
  
}

module.exports = BinarySearchTree;
