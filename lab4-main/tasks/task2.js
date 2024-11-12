function reverseWithoutNumbers(str) {
	const chars = [];
	
	for (let char of str) {
	  if (!(char >= '0' && char <= '9')) {
		chars.push(char);
	  }
	}
	
	return chars.reverse().join('');
  }

console.log(reverseWithoutNumbers("hello123world456")); 
console.log(reverseWithoutNumbers("abc123xyz"));       

module.exports = reverseWithoutNumbers;