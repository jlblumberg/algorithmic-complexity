const expect = require('chai').expect;
const myFunctions = require('./myFunctions');

describe('myReverse', () => {
  it('returns an empty array if given an empty array', () => {
    expect(myFunctions.myReverse([])).to.deep.equal([]);
  })

  it('returns the given array if it\'s only one element', () => {
    expect(myFunctions.myReverse([1])).to.deep.equal([1]);
  })

  it('switches the order of a two element array', () => {
    expect(myFunctions.myReverse([1, 2])).to.deep.equal([2, 1]);
  })

  it('reverses a three element array', () => {
    expect(myFunctions.myReverse([1, 2, 3])).to.deep.equal([3, 2, 1]);
  })

  it('reverses a longer array', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let desiredResult = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(myFunctions.myReverse(arr)).to.deep.equal(desiredResult);
  })

})