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

const measureTime = (arr, fnc) => {
  const t0 = performance.now();
  fnc.apply(arr)
  const t1 = performance.now();
  const time = t1 - t0
  return time;
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
