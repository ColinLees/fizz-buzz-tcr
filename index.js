function displayFizzBuzz(count) {

    if(count % 3 === 0)
    {
        return 'fizz'
    }

    return count;
}

module.exports = {displayFizzBuzz}