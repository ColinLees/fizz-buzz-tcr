/* global describe, it */
const assert = require('chai').assert
const app = require('.')

describe('FizzBuzz Test', () => {
    it('should return 1', () => {
        var result = app.printFizzBuzz(1);

        assert.equal(result, 1)
    })
})
