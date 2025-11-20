function firstNonRepeatedChar(str) {
	if(!str) return null
 // Write your code here
	let hMap= {}

	for(let ch in str){
		hMap[ch] = (hMap[ch] || 0) + 1
	}

	for(let ch in str){
		if(hMap[ch] == 1){
			return ch
		}
	}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
