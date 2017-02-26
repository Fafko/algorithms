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
   * Add node to the subtree where this node is a root
   * @param {*} key
   * @param {*} value
   * @returns {BinaryTreeNode}
   */
  add(key, value) {
    
    if (this._key === key) {
      this._value = value;
    } else if (this._key > key) {
      this._left = this._left
        ? this._left.add(key, value)
        : new BinaryTreeNode(key, value);
    } else {
      this._right = this._right
        ? this._right.add(key, value)
        : new BinaryTreeNode(key, value);
    }
    
    return this;
  }

  /**
   * Remove node from the subtree where this node is a root
   * @param {*} key
   * @returns {BinaryTreeNode|null}
   */
  remove(key) {
    
    if (this._key > key) {
      this._left = this._left && this._left.remove(key);
    } else if (this._key < key) {
      this._right = this._right && this._right.remove(key);
    } else {
      if (!this._left) return this._right;
      if (!this._right) return this._left;
      
      let replacingSource = this._right.getMin();
      this._key = replacingSource.getKey();
      this._value = replacingSource.getValue();
      this._right = this._right.removeMin();
    }
    
    return this
  }

  /**
   * Get node with the minimal key for this subtree
   * @returns {BinaryTreeNode}
   */
  getMin() {
    return this._left 
      ? this._left.getMin() 
      : this;
  }

  /**
   * Find and remove node with the minimal key for this subtree
   * @returns {BinaryTreeNode|null}
   */
  removeMin() {
    
    if (this._left) {
      this._left = this._left.removeMin();
    } else {
      return this._right;
    }
    
    return this;
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

  /**
   * Traverse subtree in the next order: root => leftChild => rightChild
   * @param {Function} callback
   * @returns {void}
   */
  preOrderTraversal(callback) {
    
    callback(this._key, this._value);
    this._left && this._left.preOrderTraversal(callback);
    this._right && this._right.preOrderTraversal(callback);
    
  }

  /**
   * Traverse subtree in the next order: leftChild => rightChild => root
   * @param {Function} callback
   * @returns {void}
   */
  postOrderTraversal(callback) {

    this._left && this._left.postOrderTraversal(callback);
    this._right && this._right.postOrderTraversal(callback);
    callback(this._key, this._value);
    
  }
  
  /**
   * Traverse subtree in the next order: leftChild => root => rightChild
   * @param {Function} callback
   * @returns {void}
   */
  inOrderTraversal(callback) {

    this._left && this._left.inOrderTraversal(callback);
    callback(this._key, this._value);
    this._right && this._right.inOrderTraversal(callback);

  }
  
}

module.exports = BinaryTreeNode;
