//1.Given an array of numbers, use push() to add a new element at the end.
const numbers = [2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

//2.Remove the last element from an array using pop().
console.log(numbers.pop());

//3.Add an element at the beginning of an array using unshift().
numbers.unshift(1);
console.log(numbers);

//4.Remove the first element from an array using shift().
console.log(numbers.shift());

//5.Extract the first three elements from an array using slice()
const extractArray = numbers.slice(0, 3);
console.log(extractArray);

//6.Remove two elements starting from index 1 using splice().
const array2 = [2, 4, 6, 8];
const splicedArray = array2.splice(1, 2);
console.log(array2);

//7.Insert two new elements at index 2 using splice() without removing existing elements.
const animals = ["cat", "dog", "goat", "lion", "tiger", "rabbit"];
animals.splice(2, 0, "crocodile", "aligator");
console.log(animals);

//8.Replace one element in an array using splice().
animals.splice(1, 1, "german sheperd");
console.log(animals);

//9.Given an array of prices, increase each price by 10% using map().
const prices = [2300, 4566, 13234, 234, 555];
let percentage = 10 / 100;
let newPrice;
const increaseTenPercentsge = prices.map((value) => {
  newPrice = value * percentage + value;

  return newPrice;
});

console.log(increaseTenPercentsge);

//10.From an array of numbers, filter only even numbers using filter().
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers2.filter((value) => value % 2 === 0);
console.log(evenNumbers);

//11Find the sum of all numbers in an array using reduce().
const sum = numbers2.reduce((acc, value) => {
  return (acc += value);
}, 0);
console.log(sum);

//12.Find the maximum number in an array using reduce().
const array = [234, 22, 678, 133, 55, 22];
const maximum = array.reduce((num1, num2) => (num1 > num2 ? num1 : num2));
console.log(maximum);

//13.Check if an array contains at least one negative number using some().
const numArray = [56, 34, 56, 232, -33];
const atleast = numArray.some((num) => num <= 0);

console.log(atleast ? "contain negative number" : "not contains");

//14.Check if all elements in an array are greater than zero using every().
const elements = [234, 556, 454, 676, -7, 0];
const positiveNumbers = elements.every((num) => num >= 0);
console.log(
  positiveNumbers ? "all greter thsn or equal to 0" : "negative contains"
);

//15.Find the first number greater than 50 using find().
const findNumber = [23, 21, 44, 89, 90];
const firstNumber = findNumber.find((val) => val > 50);
console.log(firstNumber);

//16.Given an array of student marks, return only the students who passed (marks ≥ 40).
const students = [
  {
    id: 1,
    name: "sourav",
    mark: 88,
  },
  {
    id: 2,
    name: "saran",
    mark: 36,
  },
  {
    id: 3,
    name: "sivi",
    mark: 89,
  },
];

const passed=students.filter((val)=>val['mark']>=40)
console.log(passed)

//17.Convert an array of names into uppercase using map().

const uppercase=animals.map((animal)=>animal.toUpperCase())
console.log(uppercase)

/**
 * 18.Count how many times each element appears in an array using array methods.
 */
const  Fruits=['apple','banana','orange','banana','apple','orange','apple']
const Count=Fruits.reduce((acc,crr)=>{
  acc[crr]?acc[crr]+=1:acc[crr]=1
  return acc
},{})

console.log(Count)

//19.Remove duplicate values from an array.
const dupe=Fruits.filter((val,index,Fruits)=>Fruits.indexOf(val)===index)
console.log(dupe)

//20.Sort an array of numbers in ascending order.
const numbers5=[676,34,2334,454,3,223,9]
const sort=numbers5.sort((a,b)=>a-b)
console.log(numbers5)

//21Chain map() and filter() to double only even numbers.
  const double=numbers5.filter((value)=>value%2===0)
  .map((num)=>console.log(num))

//22,Use reduce() to flatten a nested array.
const Nested=[[23,22],[56,78],[6,7]]
const flatArray=Nested.reduce((acc,crr)=>{
  return  acc.concat(crr)
},[])
console.log(flatArray)

//23Create a new array by removing falsy values using filter().

const array9=[1,'good',0,false,undefined,null]
const falsy=array9.filter((val)=>{
if(val!=0 || val!=undefined || val!=false || val!=null || val!=''){
return val
}else{
return;
}
})
console.log(falsy)

//24Find the average of numbers in an array.
const a=[1,3,4,5]

const average=a.reduce((total,cur,index,a)=>{

return total+=cur
},0)
console.log(average/a.length)

//25.Create a custom function similar to map().

const array3 = ['hello', 'world', 'hai', 'world'];
const item=(value)=>{
return value.toUpperCase()
}
const customMap = (array, callback) => {
  const newArray = [];

  for (let value of array) {
    newArray.push(callback(value));
  }

  return newArray;
};

const result = customMap(array3,item);

console.log(result);
