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
  
})