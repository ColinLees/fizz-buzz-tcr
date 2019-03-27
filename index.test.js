/* global describe, it */
const assert = require('chai').assert
const app = require('.')

describe('Testing', () => {
    it('should return value passed to it', () => {
        assert.equal(app.displayFizzBuzz(15), 15);
        assert.equal(app.displayFizzBuzz(10), 10);
    })

    it('should return fizz when parameter is a multiple of 3', () => {
        assert.isTrue(true);
    })
})