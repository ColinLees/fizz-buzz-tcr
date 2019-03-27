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

module.exports = {
    fizzBuzzMethod
}