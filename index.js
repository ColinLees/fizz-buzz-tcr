function fizzBuzzMethod(input) {
    var returnString = ''
    if (input % 3 == 0) {
        returnString += 'Fizz'
    }
    if (input % 5 == 0) {
        returnString += 'Buzz'
    }

    if (input % 3 != 0 && input % 5 != 0) {
        return input
    }

    return returnString
}

function fizzBuzzMulti(input){
    var splitted = fizzBuzzMulti.split(',')

    for (let index = 0; index < splitted.length; index++) {
        const element = splitted[index];
        
    }
}

module.exports = {
    fizzBuzzMethod
}