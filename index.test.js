/* global describe, it */
const assert = require('chai').assert
const fizzBuzz = require('.')

describe('Testing', () => {
    it('should work', () => {
        assert.isTrue(true)
    })

    it('should return number', () => {
        assert.equal(fizzBuzz.fizzBuzzMethod(2), 2)
    })

    it('should return Fizz for multiple of 3', () => {
        assert.equal(fizzBuzz.fizzBuzzMethod(3), 'Fizz')
    })

    it('should return Buzz for multiple of 5', () => {
        assert.equal(fizzBuzz.fizzBuzzMethod(5), 'Buzz')
    })

    it('should return FizzBuzz for multiple of 3 & 5', () => {
        assert.equal(fizzBuzz.fizzBuzzMethod(15), 'FizzBuzz')
    })

    it('should return multi', () => {
        assert.equal(fizzBuzz.fizzBuzzMulti('1,2,3,4,5'), '1,2,Fizz,4,Buzz')
    })
})
