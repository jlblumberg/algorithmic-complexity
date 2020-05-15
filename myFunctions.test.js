const expect = require('chai').expect;
const myFunctions = require('./myFunctions');

describe('myReverse', () => {
  it('takes an array and returns it reversed', () => {
    let arr = [1, 2, 3, 4, 5];
    expect(myFunctions.myReverse(arr)).to.deep.equal([5, 4, 3, 2, 1])
  })
})