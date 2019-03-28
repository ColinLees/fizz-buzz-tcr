/* global describe, it */
const assert = require('chai').assert
const {fizzOrBuzz} = require('./index')

describe('fizzOrBuzz', () => {

    const threeTest = (num) => {
        it('Should return fizz when multiple of 3 and not 5', () => {
            // Arrange
    
            // Act
            const result = fizzOrBuzz(num)
    
            // Assert
            assert.equal(result, 'fizz')
        })
    }

    threeTest(3)
    threeTest(6)
    threeTest(9)
    threeTest(12)
    threeTest(18)
    threeTest(21)
    threeTest(24)
    threeTest(27)
    threeTest(33)
    threeTest(36)
    
    const fiveTest = (num) => {
        it('Should return buzz when multiple of 5 and not 3', () => {
            // Arrange
    
            // Act
            const result = fizzOrBuzz(num)
    
            // Assert
            assert.equal(result, 'buzz')
        })
    }

    fiveTest(5)
    fiveTest(10)
    fiveTest(20)
    fiveTest(25)
    fiveTest(35)
    fiveTest(40)
    fiveTest(50)
    fiveTest(55)
    fiveTest(65)
    fiveTest(70)

    const threeFiveTest = (num) => {
        it('Should return fizzbuzz when multiple of 5 and 3', () => {
            // Arrange
    
            // Act
            const result = fizzOrBuzz(num)
    
            // Assert
            assert.equal(result, 'fizzbuzz')
        })
    }

    threeFiveTest(15)
    threeFiveTest(30)
    threeFiveTest(45)
    threeFiveTest(60)
    threeFiveTest(75)
    threeFiveTest(90)
    threeFiveTest(105)
    threeFiveTest(120)
    threeFiveTest(135)
    threeFiveTest(150)
})
