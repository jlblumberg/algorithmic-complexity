"use strict";

const myFunctions = {};

// reverse
myFunctions.myReverse = (arr) => {
	let newArr = [];
	while (arr.length > 0) {
		newArr.push(arr.pop());
	}
	return newArr;
}

// binary search
myFunctions.myBinarySearch = (arr, item) => {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		let mid = Math.floor((low + high) / 2);
		let guess = arr[mid];
		if (guess === item) {
			return mid;
		} else if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return -1;
}

// check if we are in browser or mocha, only export for mocha
if (typeof window == 'undefined') {
	module.exports = myFunctions;
}
