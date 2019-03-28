
const fizzOrBuzz = num => {
    return `${num % 3 === 0 ? 'fizz' : ''}${num % 5 === 0 ? 'buzz' : ''}${num % 3 !== 0 && num % 5 !== 0 ? num : ''}`
}

const runFizzBuzz = count => {
    var i = 1
    var result = []

    while(i <= count){

        runFizzBuzz(i)
        i++
    }

}

module.exports = {fizzOrBuzz, runFizzBuzz}