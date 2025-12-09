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