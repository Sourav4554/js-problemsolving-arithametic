//FOR IN LOOP

//1.Print all keys of an object using for…in.
const object1 = { name: "sourav", age: 67, place: "cherthala" };
for (let key in object1) {
  console.log(key);
}
console.log("\n");

//2.Print all values of an object using for…in.
for (let value in object1) {
  console.log(object1[value]);
}

console.log("\n");
//3.Count how many properties an object has.
let count = 0;
for (let key in object1) {
  count++;
}
console.log(`count= ${count}`);

console.log("\n");

//4)Find whether a given key exists in an object.
let key = "course";
console.log(key in object1 ? `${key} exists` : `${key} not exists`);

console.log("\n");

//5)Print all indexes of an array using for…in.
const array = ["apple", "orange", "grapes", "guava"];
for (let index in array) {
  console.log(index);
}

console.log("\n");
//6)Find the sum of values of an object (numeric values only).

const marks = {
  mark1: 45,
  mark2: 78,
  mark3: 56,
};
let sum = 0;
for (let key in marks) {
  sum += marks[key];
}
console.log(`sum= ${sum}`);

console.log("\n");

//7.Print only the string values from an object.
for (let key in marks) {
  console.log(`${key}= ${marks[key]}`);
}
console.log("\n");

//8.Convert all object keys to uppercase and print them.
for (let key in marks) {
  console.log(key.toUpperCase());
}

console.log("\n");

//9.Find the longest key name in an object.
const object = {
  nameeeee: "e",
  namee: "g",
  nameee: "j",
};
let keys = Object.keys(object);
let max = keys[0];

for (let key in keys) {
  if (max < keys[key]) {
    max = keys[key];
  }
}
console.log(`logest key name in object = ${max}`);
//10.Copy properties from one object to another using for…in.
let obj = {};
for (let key in marks) {
  obj[key] = marks[key];
}
console.log(obj);

//FOR OF LOOP

//1.Print all elements of an array using for…of.

const fruits = ["apple", "grapes", "cherry"];
for (let value of fruits) {
  console.log(value);
}

//2.Find the sum of all even numbers in an array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum1 = 0;
for (let value of numbers) {
  if (value % 2 === 0) {
    sum1 += value;
  }
}
console.log(`sum of even numbers = ${sum1}`);

//3.Count how many negative numbers are in an array.

const narray = [-1, -2, 0, 1, 2, 3];
let count1 = 0;
for (let value of narray) {
  if (value < 0) {
    count1++;
  }
}
console.log(`number of evenNumbers=${count1}`);

//4.Find the smallest number in an array.

const sarray = [34, 21, 45, 67, 88];
let smallest = sarray[0];
for (let key of sarray) {
  if (smallest > key) {
    smallest = key;
  }
}
console.log(`smallest=`, smallest);

//5.Print only duplicate elements from an array.
console.log('duplicate elements:')
const numsers = [4, 5, 4, 6, 7, 6,8]

let dupe=false;
for(let i=0;i<numsers.length;i++){
  dupe=false
    for(let j=0;j<numsers.length;j++){
      if(i!=j && numsers[i]===numsers[j]){
         dupe=true;
         break;
      }
    }
  if(dupe){
    console.log(numsers[i])
  }
}

//6.Reverse a string using for…of.

const string = "helloworld";
let reversed = "";
for (let value of string) {
  reversed = value + reversed;
}

console.log(`reversed=${reversed}`);

//7.Count the number of vowels in a string.
let string1 = "jsfyfttidbbmklcckwfn nuwphugaa";
let c = 0;
for (let character of string1) {
  if (
    character === "a" ||
    character === "A" ||
    character === "e" ||
    character === "E" ||
    character === "i" ||
    character === "I" ||
    character === "o" ||
    character === "O" ||
    character === "u" ||
    character === "U"
  ) {
    c++;
  }
}
console.log(`count of vowels=${c}`);

//8.Find the longest word in an array of strings.
const stringArray = ["", "sanjay", "alan", "souravkrishna"];
let l = stringArray[0];
for (let value of stringArray) {
  if (l <= value) {
    l = value;
  }
}
console.log(l);

//9.Check whether a string contains only alphabets.

const string3 = "gdgy";
let code;
let flag = false;
for (let val of string3) {
  code = val.charCodeAt();
  if (!(code >= 65 && code <= 95) && !(code >= 97 && code <= 122)) {
    flag = true;
  }
}
if (!flag) {
  console.log("only alphabets");
} else {
  console.log("other character including");
}

//10.Merge two arrays using for…of (without built-in methods).

const fruit1 = ["apple", "grapes"];
let fruit2 = ["cherry", "papaya"];
let length = 0;
for (let key of fruit1) {
  fruit2[fruit2.length] = key;
}

console.log(fruit2);



//other questions
//1.Given const numbers = [1, 2, 3, 4, 5], use a loop to print the elements in reverse order.
const numberss = [1, 2, 3, 4, 5];

for (let i = numberss.length - 1; i >= 0; i--) {
  console.log(numberss[i]);
}
//2. Write a loop to create a new array containing only the even numbers from const arr = [12,7, 19, 28, 33, 40]

const arr = [12, 7, 19, 28, 33, 40];
const even = [];

for (let index in arr) {
  if (index % 2 === 0) {
    even[index] = arr[index];
  }
}

console.log(`even=${even}`);

//3.Use a nested loop to print a multiplication table for numbers 1 to 5.

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log("\n");
}

//4. Given const sales = { January: 100, February: 200, March: 300 }, write a loop to calculate the total sales

let totalSales=0;
const sales = { January: 100, February: 200, March: 300 }
for(let key in sales){
totalSales+=sales[key]
}

console.log(`total sales =${totalSales}`)

//5.Write a loop to create a new array without duplicates from const nums = [4, 5, 4, 6, 7, 6,8]
const nums = [4, 5, 4, 6, 7, 6,8]
const unique=[]
let flag3=false;
for(let i=0;i<nums.length;i++){
  flag3=false
    for(let j=0;j<nums.length;j++){
      if(i!=j && nums[i]===nums[j]){
         flag3=true;
         break;
      }
    }
  if(!flag3){
  unique.push(nums[i])
  }
}

console.log(unique)

//6.Given, use a loop to flatten it into [1, 2, 3, 4, 5, 6].
const nested = [[1, 2], [3, 4], [5, 6]]
for(let i=0;i<=nested.length;i++){
   console.log(nested[i])
}