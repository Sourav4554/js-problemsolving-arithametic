//1.toString()->used to convert a number into string , binary , hexadecimal

//toString
let num=3434;
console.log(typeof num.toString())

//to binary
console.log(num.toString(2))

//to hexadecimal
console.log(num.toString(16))

//2.toFixed()->used to determine how many numbers need after decimal

let de=4.98237288
console.log(de.toFixed(3))

//3.toPresition()->same as to fixed but its count from start

console.log(de.toPrecision(5))

//4.toExponential()-> cut and display with e+0 on large decimal calculations
console.log(de.toExponential(2))

//5.valueOf()-> to acess the value from an object
let numObj=new Number(123)
console.log(numObj.valueOf())

//6.isFinite()->return a boolean value based after checking a value

console.log(isFinite(123))//true
console.log(isFinite(Infinity))//false

//7.isIntiger()->check a value intiger or not
 console.log(Number.isInteger(123))//true
 console.log(Number.isInteger(123.45))

//8.isNaN()->to check a number is NaN
console.log(isNaN(NaN))//true
console.log(isNaN('ddf'))//false
console.log(isNaN(33))//false

//9parseInt()->convert to number
 console.log(parseInt('3343'))

//10.parseFloat()->convert to float
console.log(parseFloat('838.3'))