
function sumArray(numbers) {
	let sum = 0; 
	
	for (let number of numbers) {
	  sum += number; 
	}
	
	return sum; 
  }

console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([10, 20, 30]));    

module.exports = sumArray;