'use strict';

const util = require('util'); // for render js objects in console
const mergeSort = require('./index');

const exampleNumber = [6, 3, 0, 7, -1, 5, 7, 2, 4, 1, 9, 8, 4];
const exampleString = 'plrmwqnghazxcvbkjfdsoiuety'.split('');
const exampleObject = [{id: 1}, {id: 95}, {id: 34}, {id: 21}, {id: 3}, {id: 37}];

const comparingFunctionASC = (a, b) =>
  a > b ? 1 : -1;

const comparingFunctionDESC = (a, b) =>
  a > b ? -1 : 1;

const comparingObjFunctionASC = (a, b) =>
  a.id > b.id ? 1 : -1;

const comparingObjFunctionDESC = (a, b) =>
  a.id > b.id ? -1 : 1;


// Examples
console.log(`source: ${exampleNumber} \nresult: ${mergeSort(exampleNumber, comparingFunctionASC)}`);
console.log(`source: ${exampleNumber} \nresult: ${mergeSort(exampleNumber, comparingFunctionDESC)}`);
console.log(new Array(50).join(' - '));
console.log(`source: ${exampleString} \nresult: ${mergeSort(exampleString, comparingFunctionASC)}`);
console.log(`source: ${exampleString} \nresult: ${mergeSort(exampleString, comparingFunctionDESC)}`);
console.log(new Array(50).join(' - '));
console.log(`source: ${util.inspect(exampleObject, false, null)} \nresult: ${util.inspect(mergeSort(exampleObject, comparingObjFunctionASC), false, null)}`);
console.log(`source: ${util.inspect(exampleObject, false, null)} \nresult: ${util.inspect(mergeSort(exampleObject, comparingObjFunctionDESC), false, null)}`);
