'use strict';

const BinaryTreeNode = require('../BinaryTreeNode');

/**
 * AVLTreeNode representing class
 */
class AVLTreeNode extends BinaryTreeNode {

  /**
   * Create an instance
   * @param {*} key
   * @param {*} value
   */
  constructor(key, value) {
    
    super(key, value);

    /**
     * @member {AVLTreeNode|null}
     * @private
     */
    this._left = null;

    /**
     * @member {AVLTreeNode|null}
     * @private
     */
    this._right = null;
    
    /**
     * @member {number}
     * @private
     */
    this._height = 1;
    
  }

  /**
   * Add node to the subtree where this node is a root
   * @param {*} key
   * @param {*} value
   * @override
   * @returns {AVLTreeNode}
   */
  add(key, value) {

    if (this._key === key) {
      this._value = value;
    } else if (this._key > key) {
      this._left = this._left
        ? this._left.add(key, value)
        : new AVLTreeNode(key, value);
    } else {
      this._right = this._right
        ? this._right.add(key, value)
        : new AVLTreeNode(key, value);
    }
    
    return this.balance();
  }

  /**
   * Remove node from the subtree where this node is a root
   * @param {*} key
   * @override
   * @returns {AVLTreeNode|null}
   */
  remove(key) {
    let result = super.remove(key);
    return result 
      ? result.balance() 
      : null;
  }

  /**
   * Get node height
   * @returns {number}
   */
  getHeight() {
    return this._height;
  }

  /**
   * Actualize node height value
   * @returns {void}
   */
  actualizeHeight() {
    
    let leftHeight = this._left ? this._left.getHeight() : 0;
    let rightHeight = this._right ? this._right.getHeight() : 0;
    this._height = ((leftHeight > rightHeight) ? leftHeight : rightHeight) + 1;
    
  }

  /**
   * Get node balance factor
   * @returns {number}
   */
  getBalanceFactor() {
    
    let rightHeight = this._right ? this._right.getHeight() : 0;
    let leftHeight = this._left ? this._left.getHeight() : 0;
    
    return rightHeight - leftHeight;
  }


  /**
   * Make right rotation around node
   * @returns {AVLTreeNode|null}
   */
  rotateRight() {
    
    let tempNode = this._left;
    this._left = tempNode.getRightChild();
    tempNode.setRightChild(this);
    this.actualizeHeight();
    tempNode.actualizeHeight();
    
    return tempNode;
  }

  /**
   * Make left rotation around node
   * @returns {AVLTreeNode|null}
   */
  rotateLeft(){
    
    let tempNode = this._right;
    this._right = tempNode.getLeftChild();
    tempNode.setLeftChild(this);
    this.actualizeHeight();
    tempNode.actualizeHeight();
    
    return tempNode;
  }

  /**
   * Balance node
   * @returns {AVLTreeNode}
   */
  balance() { 
    
    this.actualizeHeight();
    
    if (this.getBalanceFactor() == 2) {
      if (this._right && this._right.getBalanceFactor() < 0) {
        this._right = this._right.rotateRight();
      }
      
      return this.rotateLeft();
    }
    if (this.getBalanceFactor() == -2){
      if (this._left && this._left.getBalanceFactor() > 0) {
        this._left = this._left.rotateLeft();
      }
      
      return this.rotateRight();
    }
    
    return this;
  }
  
}

module.exports = AVLTreeNode;
