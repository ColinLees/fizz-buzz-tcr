function fizzBuzzMethod(input) {
    if(input % 3 == 0){
        return 'fizz'
    }
    if(input % 5 == 0){
        return 'buzz'
    }
    return input
}

module.exports = {
    fizzBuzzMethod
}