"use strict";

const myFunctions = {};

// reverse
myFunctions.myReverse = (arr) => {
  let newArr = [];
  while (arr.length > 0) {
    newArr.push(arr.pop());
  };
  return newArr;
}

// binary search
myFunctions.myBinarySearch = (arr) => {
 return -1
}

// check if we are in browser or mocha, only export for mocha
if (typeof window == 'undefined') {
  module.exports = myFunctions;
}
