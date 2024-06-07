/* 
    JS FIZZ BUZZ CHALLENGE
    multiple of 3 return FIZZ
    multiple of 5 return BUZZ
    multiple of 3 & 5 return FIZZBUZZ
*/

function fizzBuzz(number){
    if(number % 3 === 0 && number % 5 === 0) {
        console.log(number, 'FIZZBUZZ')
        return 'FIZZBUZZ'
    } else if (number % 3 === 0) {
        console.log(number, 'FIZZ')
        return "FIZZ"
    } else if (number % 5 === 0) {
        console.log(number, 'BUZZ')
        return "BUZZ"
    }
}


module.exports = fizzBuzz