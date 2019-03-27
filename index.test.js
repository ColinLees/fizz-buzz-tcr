/* global describe, it */
const assert = require('chai').assert
const app = require('.')

describe('FizzBuzz Test', () => {

    it('should return fizz when multiples of 3 are passed in ', () => {

        assert.equal(app.printFizzBuzz(3), 'fizz')

    })
})
