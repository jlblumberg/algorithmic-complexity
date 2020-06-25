"use strict";

// Wrap functions in blocks for later use
const reverse = array => array.reverse();
const myReverse = array => myFunctions.myReverse(array);

// create test array of length x. Each array has random integers between 1 and 100.
const createTestArrayOfLength = (length) => {
  return Array.from({ length: length }, () => Math.floor(Math.random() * 100));
};

// For calculating the median.
const median = arr => {
  let mid = Math.floor(arr.length / 2);
  let nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

// Measure the performance for the array of length x, 50 times, and take median score.
const measureTime = (length, fnc) => {
  let runs = [];
  for (let run = 1; run < 51; run++) {
    let arrayToTest = createTestArrayOfLength(length);
    const t0 = performance.now();
    let arrayAfterTest = fnc(arrayToTest);
    const t1 = performance.now();
    runs.push(t1 - t0);
  }
  return median(runs);
};

// Format the data as it needs to be for Chart.js
const formatData = unformattedData => {
  let formattedData = [];
  for (const length in unformattedData) {
    formattedData.push({ x: length, y: unformattedData[length] });
  };
  return formattedData;
}

const runPerformanceTest = fnc => {
  let results = {}
  for (let length = 0; length <= 100000; length += 5000) {
    results[length] = measureTime(length, fnc);
  }
  return formatData(results);
};