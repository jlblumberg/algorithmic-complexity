const myFunctions = {}

myFunctions.myReverse = (arr) => {
  return arr.reverse();
}

// check if we are in browser or mocha, only export for mocha
if (typeof window == 'undefined') {
  module.exports = myFunctions
}
