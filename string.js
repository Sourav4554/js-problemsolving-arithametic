
const string="hello world"
//1.lengthv->to find the length of a strinf
console.log(string.length)//11

//2.charAt->find character based on index number
console.log(string.charAt(6))//w

//3.indexOf->find the index number of character
console.log(string.indexOf('he'))//0
console.log(string.indexOf('jh'))//-1
console.log(string.indexOf('hf'))//-1

//4.substring->extract substring based of index nummber

//string.subString(startingIndex,numberOfCharacters or lastindex-1)

console.log(string.substring(6,8))//wo

//5.toUppercse()->conver to uppercase
console.log(string.toUpperCase())//HELLO WORLD

//6.toLowecase()->convert to Lowecase
console.log(string.toLowerCase())

//7.trim()->to remove the space in starting and index 

console.log(string.trim())//hello world

//8.replace->replase substring with other

console.log(string.replace('world','javascript'))

//9.splice ->same like substring but support negative index

console.log(string.slice(0,5))//hello
console.log(string.slice(-4,-2))

//10.split()->convert to array
console.log(string.split(''))

const string1='helloworld'

//11.lastIndexof->find the last index number based on character
console.log(string1.lastIndexOf('ld'))//8

//12.startsWith->return a boolean value based on string start with the same string in the method
console.log(string1.startsWith('hell'))//true


//13.endsWith->return a boolean value based on string ends with the same string in the method

console.log(string1.endsWith('ld'))//true

//14.charCodeAt->give utf-16 char code 

console.log(string1.charCodeAt(0))