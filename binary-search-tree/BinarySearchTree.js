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

    /**
     * Store the number of tree nodes
     * @type {number}
     * @private
     */
    this._size = 0;
  }

  /**
   * Add new key/value pair to the tree
   * @param {*} key
   * @param {*} value
   * @returns {BinarySearchTree}
   */
  add(key, value) {

    let comparableRoot = this._root;
    let insertionPlace = this._root;
    let newNode = new BinaryTreeNode(key, value);
    
    while (insertionPlace) {
      if (comparableRoot.getKey() === key) {
        return comparableRoot.setValue(value) && this;
      } else if (comparableRoot.getKey() > key) {
        insertionPlace = comparableRoot.getLeftChild();
      } else {
        insertionPlace = comparableRoot.getRightChild();
      }
      comparableRoot = insertionPlace ? insertionPlace : comparableRoot;
    }

    this._size += 1; // Increment tree size
    
    if (!comparableRoot) {
      this._root = newNode
    } else {
      comparableRoot.getKey() > key 
        ? comparableRoot.setLeftChild(newNode) 
        : comparableRoot.setRightChild(newNode)
    }
    
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
    
    let nodeToRemove = this._root; 
    let nodeToRemoveParent = null;

    while (nodeToRemove) { // Let's find node which includes needed key
      if (nodeToRemove.getKey() === key) {
        break;
      } else {
        nodeToRemoveParent = nodeToRemove;
        nodeToRemove = nodeToRemove.getKey() > key 
          ? nodeToRemove.getLeftChild() 
          : nodeToRemove.getRightChild();
      }
    }
    
    if (!nodeToRemove) { // There isn't values with such key
      return this;
    }
    
    this._size -= 1; // Decrement tree size
    
    if (!nodeToRemove.getRightChild()) {
      
      if (!nodeToRemoveParent) { // The node for removing is root
        this._root = nodeToRemove.getLeftChild();
      } else { // Replace node which will be deleted with its left child
        if (nodeToRemove === nodeToRemoveParent.getLeftChild()) {
          nodeToRemoveParent.setLeftChild(nodeToRemove.getLeftChild());
        } else {
          nodeToRemoveParent.setRightChild(nodeToRemove.getLeftChild());
        }
      }
      
    } else {
      
      let leftMostNode = nodeToRemove.getRightChild();
      let leftMostNodeParent = null;
      
      while (leftMostNode.getLeftChild()) {
        leftMostNodeParent = leftMostNode;
        leftMostNode = leftMostNode.getLeftChild();
      }
      
      if (leftMostNodeParent) {
        leftMostNodeParent.setLeftChild(leftMostNode.getRightChild());
      } else {
        nodeToRemove.setRightChild(leftMostNode.getRightChild());
      }
      
      nodeToRemove.setKey(leftMostNode.getKey());
      nodeToRemove.setValue(leftMostNode.getValue());
    }
    
    return this;
  }

  /**
   * Get the number of tree nodes
   * @returns {number}
   */
  getSize() {
    return this._size;
  }

  /**
   * Clear the tree
   * @returns {void}
   */
  clear() {
    this._size = 0;
    this._root = null;
  }

  /**
   * Traverse tree in the next order: root => leftChild => rightChild
   * @param {Function} callback
   * @returns {void}
   */
  preOrderTraversal(callback) {
    this._preOrderTraversal(this._root, callback);
  };

  /**
   * @param {BinaryTreeNode|null} node
   * @param {Function} callback
   * @private
   * @returns {void}
   */
  _preOrderTraversal(node, callback) {
    if (node) {
      callback(node.getKey(), node.getValue());
      this._preOrderTraversal(node.getLeftChild(), callback);
      this._preOrderTraversal(node.getRightChild(), callback);
    }
  }

  /**
   * Traverse tree in the next order: leftChild => rightChild => root
   * @param {Function} callback
   * @returns {void}
   */
  postOrderTraversal(callback) {
    this._postOrderTraversal(this._root, callback);
  };

  /**
   * @param {BinaryTreeNode|null} node
   * @param {Function} callback
   * @private
   * @returns {void}
   */
  _postOrderTraversal(node, callback) {
    if (node) {
      this._postOrderTraversal(node.getLeftChild(), callback);
      this._postOrderTraversal(node.getRightChild(), callback);
      callback(node.getKey(), node.getValue());
    }
  }

  /**
   * Traverse tree in the next order: leftChild => root => rightChild
   * @param {Function} callback
   * @returns {void}
   */
  inOrderTraversal(callback) {
    this._inOrderTraversal(this._root, callback);
  };

  /**
   * @param {BinaryTreeNode|null} node
   * @param {Function} callback
   * @private
   * @returns {void}
   */
  _inOrderTraversal(node, callback) {
    if (node) {
      this._inOrderTraversal(node.getLeftChild(), callback);
      callback(node.getKey(), node.getValue());
      this._inOrderTraversal(node.getRightChild(), callback);
    }
  }
  
}

module.exports = BinarySearchTree;
