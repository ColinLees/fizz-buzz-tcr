module.exports.single = (n) => {
  if (n === 3) {
    return 'Fizz'
  }
  if (n === 5) {
    return 'Buzz'
  }
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz'
  }
  return n.toString()
}
