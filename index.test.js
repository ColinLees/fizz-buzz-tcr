/* global describe, it */
const assert = require('chai').assert
const app = require('.')

describe('FizzBuzz Test', () => {

    it('should return fizz when multiples of 3 are passed in ', () => {
        assert.equal(app.printFizzBuzz(3), 'fizz')
    })

    it('should return fizz when multiples of 5 are passed in ', () => {
        assert.equal(app.printFizzBuzz(5), 'buzz')
    })

    it('should return fizz when multiples of 3 and 5 are passed in ', () => {
        assert.equal(app.printFizzBuzz(15), 'fizzbuzz')
    })
})
