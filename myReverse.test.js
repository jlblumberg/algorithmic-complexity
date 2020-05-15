const expect = require('chai').expect;
const myReverse = require('myReverse');

describe('myReverse', () => {
  let arr;

  it('takes an array and returns it reversed', () => {
    arr = [1, 2, 3, 4, 5];
    expect(arr.apply(myReverse)).to.equal([5, 4, 3, 2, 1])
  })
})