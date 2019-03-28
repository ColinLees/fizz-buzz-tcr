/* global describe, it */
const assert = require('chai').assert
const fizzbuzz = require('./index')

describe('Testing', () => {
    it('should return 1', () => {
        const result = fizzbuzz.fizzbuzz(1)
        assert.equal(result, '1')
    })

    it('should return fizz', () => {
        const result = fizzbuzz.fizzbuzz(3)
        assert.equal(result, 'fizz')
    })

    it('should return buzz', () => {
        const result = fizzbuzz.fizzbuzz(5)
        assert.equal(result, 'buzz')
    })

    it('should return fizzbuzz', () => {
        const result = fizzbuzz.fizzbuzz(15)
        assert.equal(result, 'fizzbuzz')
    })
})

// describe('runFizzbuzz', () => {
//     it('should return correct results for numbers up to 15', () => {
//         const expectedResult = ['1', '2', 'fizz', '4', 'buzz', 'fizz', '7', '8', 'fizz', 'buzz', '11', 'fizz', '13', '14', 'fizzbuzz']
//         const result = fizzbuzz.runFizzbuzz(15)
//         assert.notDeepEqual(result, expectedResult)
//     })
// })
