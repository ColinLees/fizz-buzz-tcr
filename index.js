const fizzbuzz = (num) => {
	if(num % 3 == 0 && num % 5 == 0) {
		return 'fizzbuzz'
	}
	if(num % 3 == 0) {
		return 'fizz'
	}
	if(num % 5 == 0) {
		return 'buzz'
	}
	return num.toString()
}

const runFizzbuzz = (limit) => {
	const list = []
	for (let index = 1; index <= limit; index++) {
		let result = fizzbuzz(index)
		list.push(result)	
	}
	console.log(list)
	return list
}

module.exports = { fizzbuzz, runFizzbuzz }
