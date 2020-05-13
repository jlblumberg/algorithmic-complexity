const inbuiltReverse = Array.prototype.reverse

// Create array of arrays. Each array has random ints between 1 and 100.
const createTestArray = () => {
  let result = [];
  for (let length = 0; length <= 100000; length += 5000) {
    result.push(
      Array.from({ length: length }, () => Math.floor(Math.random() * 100))
    );
  }
  return result;
}

// for calculating an average
const average = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

// fun the func on the array 10 times and do nothing with it
const tenThrowAwayRuns = (arr, fnc) => {
  for (let run = 1; run < 11; run++) {
    fnc.apply(arr);
  }
}

// do throw away runs, then time the fnc 50 times and average the result
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

// run the timer on the array of arrays
const runPerformanceTest = methodOfChoice => {
  data = {}
  let testArray = createTestArray();
  for (let i = 0; i < testArray.length; i++) {
    data[testArray[i].length] = measureTime(testArray[i], methodOfChoice)
  };
  return data;
};

// format data for chart.js
const dataForChartJs = (fnc) => {
  let formattedData = [];
  let unformattedData = runPerformanceTest(fnc);
  for (const length in unformattedData) {
    formattedData.push({x: length, y: unformattedData[length]});
  };
  return formattedData;
}