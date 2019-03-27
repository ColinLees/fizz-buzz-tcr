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
})
