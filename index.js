function printFizzBuzz(count){

    if(count % 3 === 0 && count % 5 === 0){
        return 'fizzbuzz'
    }
    else if(count % 5 === 0){
        return 'buzz'
    }
    else if(count % 3 === 0){
        return 'fizz'
    }
    
    return count
}

module.exports = {printFizzBuzz}
