//creating array
const fruits=['kiwi','mango','cherry'];
const animals=new Array('cow','dog','cat')

//accesing elements from an array
console.log(fruits[0])
console.log(animals[animals.length-1])

//array methods

//1.push()->add elements after last position
fruits.push('jackfruit','pineapple','orange')
console.log(fruits)

//2.pop()->remove element from last position
animals.pop()
console.log(animals)

//3.shift()->remove element from first position
fruits.shift()
console.log(fruits)

//4.unshift()->add elements to the first position
animals.unshift('dear','bear')
console.log(animals)

//5.split()->extract values from array

const numbers=[1,56,34,2,67,8,99,22]

let slicedNumbers=numbers.slice(-4,-2)
//console.log(slicedNumbers)

//concat()->concantinate two arrays
const arr1=[3,4,5]
const arr2=[6,7,8]
let c=arr1.concat(arr2)
console.log(c)
 console.log(arr1)
// console.log(arr2)

//splice()->add ,replace ,remove
//add element
const cars=['BMW','Audi','Boleno','swift','toyota'];
cars.splice(1,0,'ferari','lamborgini')

console.log(cars)

//remove element
cars.splice(1,2)
console.log(cars)


//replace element
cars.splice(0,2,'ferari','lamborgini')
console.log(cars)

//remove from first index
cars.splice(0,1)
console.log(cars)

//remove from last
cars.splice(cars.length-1,1)
console.log(cars)

//indexOf()->find index
console.log(cars.indexOf('lamborgini'))

//forEach()->itrate throug array
const ChestWorkouts=['flatBenchpress','inclineBenchpress','declineBenchpress','dumbellfly','butterfly']
ChestWorkouts.forEach((workout,index)=>console.log(`${index}: ${workout}`))

//map()

const e=ChestWorkouts.map((currentValue,index,ChestWorkouts)=>{
 return currentValue===ChestWorkouts[index]
})
console.log(e)

//filter
const Benchpress=ChestWorkouts.filter((press,index,ChestWorkouts)=>{
return press.toLocaleLowerCase().includes('benchpress')
})
console.log(Benchpress)

//reduce
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const numbers1=[30,23,2,3,5,6,7,87]

const tot=numbers.reduce((total,value,index,numbers1)=>total+value,1)
console.log(tot)

const largest=numbers.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(largest)
/**
 * users=[
 * {id:1,name:'john'},
 * {id:2,name:'jacob'}
 * ]
 *output-> {1:john,2:jacob}
 *
 * fruits=['apple','banana','orange','banana','apple','orange','apple]
 * {apple:3,banana:2,orange:2}
 * 
 * arrays=[[1,2],[3,4],[5]]
 * [1,2,3,4,5]
 * }
 */

 const users=[
  {id:1,name:'john'},
  {id:2,name:'jacob'}
  ]
  const newOb=users.reduce((acc,value)=>{
    acc[value['id']]=value['name']
    return acc
 },{})

 console.log(newOb)
const  Fruits=['apple','banana','orange','banana','apple','orange','apple']

const fruitsCount=Fruits.reduce((arr,val,)=>{
arr[val]=(arr[val] || 0)+1
return arr;
},{})

console.log(fruitsCount)

const arrays=[[1,2],[3,4],[5]]

const flatArray = arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
  
  console.log(flatArray);
 //find()

 const check=numbers1.find((value,index,numbers1)=>value===7)
 console.log(check)

 //some
 const check1=numbers.some((value,index,numbers1)=>value>10)
 console.log(check1)

 //every
 const check2=numbers.every((value,index,numbers1)=>value>0)
 console.log(check2)

 //STACK
 //LIFO
 const STACK=[]

 for(let i=5;i<=50;i+=10){
  STACK.push(i)
 }
 console.log(STACK)
 let pop=STACK.pop()
 console.log(pop)

  //Queue
 //FIFO
 const queue=[]

 for(let i=10;i<=50;i+=10){
  queue.push(i)
 }
 console.log(queue)
 let dequeue=queue.shift()
 console.log(dequeue)

 console.log(this)

 