function firstNonRepeatedChar(str) {
 // Write your code here
	 for(let i=0; i<str.length-1; i++){
		 let first = str[i]
		 let second = str[i+1]
		 if(first !== second){
			 return first
		 }else{
			 return null;
		 }
	 }
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
