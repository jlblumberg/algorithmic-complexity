const myFunctions = {}

myFunctions.myReverse = (arr) => {
  arr.push(arr[0])
  arr.shift()
  return arr
}

// check if we are in browser or mocha, only export for mocha
if (typeof window == 'undefined') {
  module.exports = myFunctions
}
