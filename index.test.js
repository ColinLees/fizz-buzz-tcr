/* global describe, it */
const assert = require('chai').assert
const fizzBuzzer = require('.')

describe('FizzBuzz', () => {
  it('should return "1" for 1', () => {
    assert.equal(fizzBuzzer.single(1), '1')
  })

  it('should return "2" for 2', () => {
    assert.equal(fizzBuzzer.single(2), '2')
  })

  it('should return "Fizz" for 3', () => {
    assert.equal(fizzBuzzer.single(3), 'Fizz')
  })

  it('should return "Buzz" for 5', () => {
    assert.equal(fizzBuzzer.single(5), 'Buzz')
  })
})
