const myFunctions = {}

myFunctions.myReverse = (arr) => {
  newArr = []
  while (arr.length > 0) {
    newArr.push(arr.pop());
  }
  return newArr
}

// check if we are in browser or mocha, only export for mocha
if (typeof window == 'undefined') {
  module.exports = myFunctions
}
