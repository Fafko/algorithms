'use strict';

const BinarySearchTree = require('../BinarySearchTree');
const AVLTreeNode = require('./AVLTreeNode');

/**
 * AVLTree representing class
 */
class AVLTree extends BinarySearchTree {

  /**
   * Create an instance
   */
  constructor() {
    super();
  }

  /**
   * Add new key/value pair to the tree
   * @param {*} key
   * @param {*} value
   * @override
   * @returns {AVLTree}
   */
  add(key, value) {

    this._root = this._root
      ? this._root.add(key, value)
      : new AVLTreeNode(key, value);

    return this;
  }
  
}

module.exports = AVLTree;
