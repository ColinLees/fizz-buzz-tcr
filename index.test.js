/* global describe, it */
const assert = require('chai').assert
const app = require('.')

describe('FizzBuzz Test', () => {
    it('should return value passed in', () => {

        assert.equal(app.printFizzBuzz(1), 1)
        assert.equal(app.printFizzBuzz(10), 10)
    })
})
