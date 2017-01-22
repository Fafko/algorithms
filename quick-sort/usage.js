'use strict';

const util = require('util'); // for render js objects in console
const quickSort = require('./index');

const exampleNumber = [6, 3, 0, 7, -1, 5, 7, 2, 4, 1, 9, 8, 4];
const exampleString = 'plrmwqnghazxcvbkjfdsoiuety'.split('');
const exampleObject = [{id: 1}, {id: 95}, {id: 34}, {id: 21}, {id: 3}, {id: 37}];

const comparingFunctionASC = (a, b) =>
  a > b ? 1 : a < b ? -1 : 0;

const comparingFunctionDESC = (a, b) =>
  a > b ? -1 : a < b ? 1 : 0;

const comparingObjFunctionASC = (a, b) =>
  a.id > b.id ? 1 : a.id < b.id ? -1 : 0;

const comparingObjFunctionDESC = (a, b) =>
  a.id > b.id ? -1 : a.id < b.id ? 1 : 0;


// Examples
console.log(`source: ${exampleNumber} \nresult: ${quickSort(exampleNumber, comparingFunctionASC)}`);
console.log(`source: ${exampleNumber} \nresult: ${quickSort(exampleNumber, comparingFunctionDESC)}`);
console.log(new Array(50).join(' - '));
console.log(`source: ${exampleString} \nresult: ${quickSort(exampleString, comparingFunctionASC)}`);
console.log(`source: ${exampleString} \nresult: ${quickSort(exampleString, comparingFunctionDESC)}`);
console.log(new Array(50).join(' - '));
console.log(`source: ${util.inspect(exampleObject, false, null)} \nresult: ${util.inspect(quickSort(exampleObject, comparingObjFunctionASC), false, null)}`);
console.log(`source: ${util.inspect(exampleObject, false, null)} \nresult: ${util.inspect(quickSort(exampleObject, comparingObjFunctionDESC), false, null)}`);
