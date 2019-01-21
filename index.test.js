/* global describe, it */
const assert = require('chai').assert
const fizzBuzzer = require('.')

describe('FizzBuzz', () => {
  it('should return "1" for 1', () => {
    const result = fizzBuzzer.single(1)
    assert.equal(result, '1')
  })
})
