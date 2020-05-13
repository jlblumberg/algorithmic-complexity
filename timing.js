const { performance } = require('perf_hooks');

const inbuiltReverse = Array.prototype.reverse

const createTestArray = () => {
  let result = [];
  for (let length = 5000; length <= 100000; length += 5000) {
    result.push(
      Array.from({ length: length }, () => Math.floor(Math.random() * 100))
    );
  }
  return result;
}

const average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const tenThrowAwayRuns = (arr, fnc) => {
  for (let run = 1; run < 11; run++) {
    fnc.apply(arr);
  }
}

const measureTime = (arr, fnc) => {
  let runsToAverage = []
  tenThrowAwayRuns(arr, fnc);
  for (let run = 1; run < 51; run++) {
    const t0 = performance.now();
    fnc.apply(arr);
    const t1 = performance.now();
    runsToAverage.push(t1 - t0);
  }
  return average(runsToAverage);
}

const runPerformanceTest = methodOfChoice => {
  data = {}
  let testArray = createTestArray();
  for (let i = 0; i < testArray.length; i++) {
    data[testArray[i].length] = measureTime(testArray[i], methodOfChoice)
  };
  return [data];
};

console.log(runPerformanceTest(inbuiltReverse));
