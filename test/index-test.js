const assert = require('assert')
const fizzBuzz = require('../index')

// FIZZBUZZ TEST SUITE
describe('FIZZ BUZZ TEST', function(){
    it('multiple of 3 & 5 return FIZZBUZZ', function(){
        const number = 15
        const expected = "FIZZBUZZ"

        const actual = fizzBuzz(number)
        assert.strictEqual(actual, expected)
    })
    it('multiple of 3 return FIZZ', function(){
        const number = 21
        const expected = "FIZZ"

        const actual = fizzBuzz(number)
        assert.equal(actual, expected)
    })
    it('multiple of 5 return BUZZ', function(){
        const number = 20
        const expected = "BUZZ"

        const actual = fizzBuzz(number)
        assert.equal(actual, expected)
    })
    
})