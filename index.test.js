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

  it('should return "Fizz" for 6', () => {
    assert.equal(fizzBuzzer.single(6), 'Fizz')
  })

  it('should return "Buzz" for 10', () => {
    assert.equal(fizzBuzzer.single(10), 'Buzz')
  })

  it('should return "FizzBuzz" for 15', () => {
    assert.equal(fizzBuzzer.single(15), 'FizzBuzz')
  })
})

describe('FizzBuzz string', () => {
  it('should return "1" for "1"', () => {
    assert.equal(fizzBuzzer.string('1'), '1')
  })

  it('should reutrn "1, 2" for "1, 2"', () => {
    assert.equal(fizzBuzzer.string('1, 2'), '1, 2')
  })

  it('should return "1, 2, Fizz" for "1, 2, 3', () => {
    assert.equal(fizzBuzzer.string('1, 2, 3'), '1, 2, Fizz')
  })

  it('should return correct response for numbers from 1 => 15', () => {
    assert.equal(fizzBuzzer.string('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15'), '1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz')
  })
})
