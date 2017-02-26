"use strict";

const util = require('util'); // correct js objects output in console
const AVLTree = require('./AVLTree');

let avlTree = new AVLTree();

avlTree
  .add(0, 'zero').add(1, 'one')
  .add(2, 'two').add(3, 'three')
  .add(4, 'four').add(5, 'five')
  .add(6, 'six').add(7, 'seven')
  .add(8, 'eight').add(9, 'nine');

avlTree.remove(4);

console.log(util.inspect(avlTree, false, null));
