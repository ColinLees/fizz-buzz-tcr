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

    it('should return fizz for multiple of 3', () => {
        assert.equal(fizzBuzz.fizzBuzzMethod(3), 'fizz')
    })
})
