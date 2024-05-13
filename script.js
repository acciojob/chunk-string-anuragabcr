function stringChop(str, size) {
  // your code here
	sub = []
	i = 0
	while(i <= str.length) {
		sub.push(str.slice(i, i+size))
		i += size
	}	
	return sub
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
