function firstNonRepeatedChar(str) {
 // Write your code here
	let hMap= {}

	for(ch in str){
		hMap[ch] = (hMap[ch] || 0) + 1
	}

	for(ch in str){
		if(hMap[ch] == 1){
			return ch
		}
	}
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
