function displayName(){
console.log('sourav')
}
displayName();

function add(num1,num2){
  return num1+num2;
}

console.log(add(45,5))

const multiply=function(num1,num2){
return num1*num2;
}

console.log(multiply(4,5))


const adding=()=>{
console.log('adding')
}
adding()

//parameters
//1.required parameter
const print=(string)=>{
console.log(string)
}
print('hello world')

//2.default paramter

const sum=(num1=0,num2=0)=>{
console.log(num1+num2)
}
sum(5)

//3.Rest parameters
const Total=(...marks)=>{
  console.log(marks)
  let total=0
for(value of marks){
  total+=value;
}
console.log(total)
}

Total(100,90,100)

const Multiply=(...nums)=>{
  let mul=1;
  for(let num of nums){
   mul*=num;
  }
  console.log(mul)
}
Multiply(5,5,5)

//4.destructured

const Destructured=([a,b])=>{
console.log(a,b)
}
Destructured([1,2,3,4])

const displayPatientDetails=({name,desease})=>{
console.log(`name=${name} \ndesease=${desease}`)
}
const patient={
name:'regjiu',
desease:'heart attack'
}
displayPatientDetails(patient)

//Higher order functions
const greet=(name)=>{
return `hello ${name}`
}

const executeGreet=(fun)=>{
console.log( fun('john'))
}
executeGreet(greet)


const addd=(a,b)=>{
return a+b;
}
const sub=(a,b)=>{
return a-b;
}
const mul=(a,b)=>{
return a*b
}
const div=(a,b)=>{
return a/b
}

const printResult=(a,b,calc)=>{
console.log(`result = ${calc(a,b)}`)
}
printResult(10,5,addd)
printResult(20,10,sub)
printResult(20,10,mul)
printResult(5,3,div)


const fetchData=(callback)=>{
console.log('data fetchingg...')
callback()
}

const showResult=()=>{
 console.log('data received...')
}

fetchData(showResult)

const executeTask=(task,callback)=>{
console.log(`task: ${task}`)
callback()
}

executeTask('clean the room',function (){
console.log(`task completed`)
})

//Recursive function

const factorial=(num)=>{
if(num===1){
 return 1;
}
return num*factorial(num-1)
}
console.log(`factorial= ${factorial(5)}`)

const Sum=(num)=>{
  if(num===0){
   return 0;
  }
  return num+Sum(num-1)
  }
  console.log(`sum of numbers= ${Sum(5)}`)

  const power=(base,exponent)=>{
  if(exponent===0){
  return 1;
  }
  return base*power(base,exponent-1)
  }
  console.log(`power= ${power(5,3)}`)

  //immediate evoke function

  // (function() {
  //   var message = "This function runs immediately.";
  //   console.log(message); // Output: This function runs immediately.
  // })();

  
  
  // (
  // function(){
  //   console.log('dtksrtest')
  // }  
  // )()

  //scope chain

function outer(){
  let x=10;
function inner(){
  let x=20
  console.log(x)
}
console.log(x)
inner()
}
outer()

//closure

const increment=()=>{
let count=0;
return function(){
 return ++count;
}
}

const counter=increment();

console.log(counter())
console.log(counter())