function printFizzBuzz(count){

    if(count % 3 === 0){
        return 'fizz'
    }
    else if(count % 5 === 0){
        return 'buzz'
    }
    
    
    return count
}

module.exports = {printFizzBuzz}
