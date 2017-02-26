"use strict";

const BinarySearchTree = require('./BinarySearchTree');

let bst = new BinarySearchTree();

let traversalFunction = (key, value) => console.log(`{${key}: ${value}}`);

bst
  .add(5, 'five').add(1, 'one')
  .add(0, 'zero').add(2, 'two')
  .add(3, 'three').add(9, 'nine')
  .add(4, 'four').add(7, 'seven')
  .add(6, 'six').add(8, 'eight');

bst.remove(4);
console.log(bst.get(1));

console.log('\n');
bst.preOrderTraversal(traversalFunction);
console.log('\n');
bst.postOrderTraversal(traversalFunction);
console.log('\n');
bst.inOrderTraversal(traversalFunction);
