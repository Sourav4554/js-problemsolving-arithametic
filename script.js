//non-primitive datatypes

// object

const object={
    name:"sourav",
    age:21,
    address:"puthanambalam"
}

//array

const array=[true,"sourav",34,687.5,null,undefined];

//function
function printName(){
    console.log('My name is sourav')
}
printName()
console.log(array)
console.log(object)

// type-casting ->convert the type of data

//1)implicit coercion->automatically converts

//1.1)string coercion
const result="5"+3;
console.log(result)
console.log(typeof result)

//1.2)number coercion
const result1="5"*3;
console.log(result1)
console.log(typeof result1)

//1.3)Boolean coersion
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(null))

//2)explicit-coercion->its the concept which manually converts using methods

//2.1)string coercion
const val=45;
console.log(typeof String(val))
console.log(typeof val.toString())

//2.2)Number coercion
const string='42';
const string1='23.4';

console.log(typeof Number(string))
console.log(typeof +string)
console.log(typeof parseInt(string))
console.log(typeof parseFloat(string1))


//2.3)Boolean coercion
let bool=0;
let bool1=1;

console.log(Boolean(bool))
console.log(!!bool1)


//operators

//1)Arithametic operators

console.log("addition",3+4)
console.log("substraction",3-4)
console.log("multiplication",3*4)
console.log("division",3/4)
console.log("modulus",3%4)

//2)Assignment operator
let a=10
console.log("addition=",a+=10) // 10+10=20
console.log("substraction",a-=10)//20-10=10
console.log("multiplication",a*=10)//10*10=100
console.log("division",a/=10)//100/10=10
console.log("modulus",a%=10)//10%10=0

//3)comparisson operator
let num=5
let num1=10

console.log(5==10)//false
console.log(5===10)//false

let num2=13
let num4="13"

console.log(num2==num4)//true
console.log(num2===num4)//false

console.log(num>num1)//false
console.log(num<num1)//true

console.log(num2>=num4)//true //doesnt check the datattype only check in strict === 

console.log(num4<=num2)//true

console.log(num2!=num4)//false 13!="13"

console.log(num2!==num4)//true  13!=="13"

//logical operator
let isLogin=true
let notLogin=false

console.log(isLogin&&notLogin) //false
console.log(isLogin||notLogin)// true

//bitwise operator
let b=5 
let c=1

console.log(b&c)  // 8 4 2 1
                  // 0 1 0 1=5
                  // 0 0 0 1=1
                  // -------
                  // 0 0 0 1
                  //answer=1

console.log(b|c)  // 8 4 2 1
                  // 0 1 0 1=5
                  // 0 0 0 1=1
                  // -------
                  // 0 1 0 1
                  //answer=5

console.log(b^c)  // 8 4 2 1
                  // 0 1 0 1=5
                  // 0 0 0 1=1
                  // -------
                  // 0 1 0 0
                  //answer=4

console.log(~b)  //~x=-(x+1)
                 //answer=-6


//Ternary operator

let age=18;

let vote=age>=18?"eligible for vote":"not eligible for vote";

console.log(vote)

//comma operator (,  ,)

let z1,z2;

const result3=(z1=10,z2=4,z1+z2)
console.log(result3)


//unary operator

//post increment
let a5=30;
let b4=a5++;
console.log(b4)//30
console.log(a5)//31

//pre-increment
let c3=++a5
console.log(c3)//32
console.log(a5)//32

//post decrement
let a6=30;
let b6=a6--;
console.log(b6)//30
console.log(a6)//29

//pre decrement

let b7=--a6;
console.log(b7)//28
console.log(a6)//28


//relational operator

const obj={
name:"sourav",
age:69
}

console.log("name" in obj) //true
console.log("mark" in obj)//false

console.log(obj instanceof Object) //true
console.log(obj instanceof Array) //false

//string operators
let m1=77;
console.log("mark is"+" "+m1) //mark is 77

let str='hello'
str+='world'

console.log(str)//hello world

//chaining operator (?.)

const person={
name:"sourave",
age:33,
adress:{
hname:"karuvelil"
}
}

console.log(person.adress?.panchayath) // undefined
console.log(person.adress?.hname) //karuvellil


