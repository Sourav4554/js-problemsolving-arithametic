//1.Write a JS program to add two numbers: 12 and 8.
const add = () => 12 + 8;
console.log(add());

//2.Subtract 15 from 45 and print the result.
const substract = () => 45 - 15;
console.log(substract());

//3.Multiply 7 and 9.
const multiply = () => 7 * 9;
console.log(multiply());

//4.Divide 144 by 12.
const divide = () => 144 / 12;
console.log(divide());

//5.Find the remainder when 29 % 5.
const reminder = () => 29 % 5;
console.log(reminder());

//6.Write a program to convert Celsius to Fahrenheit using the formula: F = (C * 9/5) + 32

const Fahrenheit = (celcious) => {
  return (celcious * 9) / 5 + 32;
};
console.log("fahrenheit", Fahrenheit(32));

//7.Calculate the area of a rectangle — inputs: length = 12, width = 7.

const rectangleArea = (length, width) => length * width;
console.log("area of a rectangle=", rectangleArea(4, 5));

//8.Write a program that adds 10 to a number, multiplies by 2, and then subtracts 5.

const main = (num) => {
  return (10 + num) * 2 - 5;
};
console.log("answer", main(20));

//9.Use arithmetic to find the average of 5 numbers: 10, 20, 30, 40, 50.
const average = () => {
  let sum = 0;
  for (let i = 10; i <= 50; i += 10) {
    sum += i;
  }
  return sum / 5;
};
console.log(`average`, average());

//10.Write a program to calculate the simple interest: SI = (P × T × R) / 100

const simpleInterest = (Principal, anualInterest, years) => {
  let si;
  return (si = (Principal * anualInterest * years) / 100);
};
console.log(`simple interest ${simpleInterest(3000, 0.5, 5)}`);

//11.Write a program that increases a salary by 20%
const increaseSalary = (salary) => {
  let increaseAmount = (salary * 20) / 100;
  let newSalary = salary + increaseAmount;
  console.log(`salary after 20% increment = ${newSalary}`);
};
increaseSalary(30000);
/**
 *12. A shopkeeper increases the price of an item by 18%. If the original price is 450, 
      find the new price.
 */

const increasePrice = (price) => {
  let increasePrice = (450 * 18) / 100;
  let newPrice = increasePrice + price;
  console.log(`new price ${newPrice}`);
};
increasePrice(450);

//13.A student scored marks: Math = 78, Science = 82, English = 90. Find the total and percentage.

const percentage = (total) => {
  return Math.round((total / 300) * 100);
};
const total = (mark1, mark2, mark3) => {
  let t = mark1 + mark2 + mark3;
  return percentage(t);
};
console.log(`percentage = `, total(100, 100, 100));

//14.A car travels 560 km using 40 liters of fuel. Find mileage (km/l).

const milage = () => console.log(`milage= ${560 / 40}`);
milage();

//15.Write a program to split a restaurant bill among 4 people after adding 7% tax.
function restaurant(bill) {
  let newbill = bill + (bill * 7) / 100;
  return newbill / 4;
}

console.log(`restaurent bill = ${restaurant(1500)}`);

//16.Write a function to reverse a string.
const reverseString = (string) => {
  return string.split("").reverse().join("");
};
console.log(reverseString("string"));
//17.Write a function to count vowels in a string.
const countVowels = (string) => {
  count = 0;
  for (let character of string) {
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
      count++;
    }
  }
  return count;
};
console.log(`number of vowels`, countVowels("aAnhfheio"));

//18.Write a function to find the factorial of a number.

const factorial = (num) => {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(`factorial= ${fact}`);
};
factorial(5);

//19.Write a function to check if a number is prime.
const checkPrime = (num) => {
  let flag = 0;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      flag = 1;
      break;
    }
  }
  console.log(flag ? "its a prime number" : "its not a prime number");
};
checkPrime(7);

//20.Write a function to find the sum of elements in an array.
const array = [12, 45, 6763, 33];
const sumElements = () => {
  let sum = 0;
  for (let value of array) {
    sum += value;
  }
  return sum;
};
console.log(`sum of elements= ${sumElements()}`);

//21.Write a function to remove duplicates from an array.

const fruits = ["apple", "orange", "cherry", "apple", "cherry"];
const unique = [];

const removeDuplicates = () => {
  let flag = 0;
  for (let i = 0; i < fruits.length; i++) {
    flag = 0;
    for (let j = 0; j <= fruits.length; j++) {
      if (i != j && fruits[i] === fruits[j]) {
        flag = 1;
        break;
      }
    }
    if (!flag) {
      unique.push(fruits[i]);
    }
  }
  console.log(unique);
};
removeDuplicates();

//22.Write a function to check if a string is a palindrome
const palindrome = (string) => {
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  console.log(reverse);
  console.log(reverse === string ? "palindrome" : "not palindrome");
};

palindrome("malayala");
