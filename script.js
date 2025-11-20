function firstNonRepeatedChar(str) {
	if(!str) return null;
 // Write your code here
	 for(let i=0; i<str.length-1; i+=2){
		 let first = str[i]
		 let second = str[i+1]
		 if(first !== second){
			 return first
		 }
	 }
	return null
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
