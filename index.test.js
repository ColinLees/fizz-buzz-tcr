/* global describe, it */
const assert = require('chai').assert
const app = require('.')

describe('Testing', () => {
    it('should return fizz when parameter is a multiple of 3', () => {
        assert.equal(app.displayFizzBuzz(3), 'fizz');
        assert.equal(app.displayFizzBuzz(6), 'fizz');
    })
})