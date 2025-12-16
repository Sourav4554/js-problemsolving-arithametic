//using for loop

//1.Print numbers from 1 to 10 using a for loop.

console.log("numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log("number:", i);
}

//2.Print even numbers between 1 and 50.

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log("even:", i);
  }
}

//3.Print odd numbers between 1 and 30.

for (let i = 1; i <= 30; i++) {
  if (i % 2 !== 0) {
    console.log("odd:", i);
  }
}

//4.Print the multiplication table of 5.

for (let i = 1; i <= 10; i++) {
  console.log(`${i} x ${5} = ${i * 5}`);
}

//5.Print numbers from 10 to 1 (reverse order).
console.log("numbers from 10 to 1");
for (let i = 10; i >= 1; i--) {
  console.log("number:", i);
}

//6.Find the sum of numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`sum of 100 number = ${sum}`);

//7.Print all numbers between 1 and 100 that are divisible by 3.
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(`${i} divisible by 3`);
  }
}

//8.Print the first 10 natural numbers.
for (let i = 1; i <= 10; i++) {
  console.log(`natural numbers= ${i}`);
}

//9.Find the sum of all even numbers between 1 and 50.

let sumEven = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}
console.log(`sum of even numbers from 1 to 50 = ${sumEven}`);

//10.Find the factorial of a given number.
let number = 5;
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}
console.log(`factorial of ${number}  = ${factorial}`);

//11.Count how many numbers between 1 and 100 are divisible by 5.
let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    count++;
  }
}

console.log(
  `count of  numbers between 1 and 100 are divisible by 5 = ${count}`
);

//12.Print all factors of a given number.
const input = 124;
console.log(`factors of ${input}`);
for (let i = 1; i <= input; i++) {
  if (input % i === 0) {
    console.log(i);
  }
}

//13.Reverse a given number using a for loop.
let Number3 = 234;
let teemp = Number3;
let rev = 0;
for (let i = 0; i <= teemp; i++) {
  rev = (teemp % 10) + rev * 10;
  teemp = parseInt(teemp / 10);
}
console.log(`reverse of ${Number3} = ${rev}`);

//14.Check whether a given number is a prime number.
let flag = 1;
let prime = 5;
for (let i = 2; i <= prime / 2; i++) {
  if (prime % i === 0) {
    flag = 0;
  }
}
console.log(!flag ? `${prime} is not prime` : `${prime} is  prime`);

//15.Print all prime numbers between 1 and 50.
let flag1 = 0;
for (let i = 2; i <= 50; i++) {
  flag1 = 0;

  for (let j = 2; j <= i / 2; j++) {
    if (i % j === 0) {
      flag1 = 1;
      break;
    }
  }
  if (!flag1) {
    console.log(i);
  }
}

//16.Find the sum of digits of a number.
let sumOfDigits = 0;
let n = 235;
let t = n;
for (i = 0; i <= t; i++) {
  let digit = t % 10;
  sumOfDigits += digit;
  t = parseInt(t / 10);
}
console.log(`sum of digits of ${n} = ${sumOfDigits}`);

//using while loop

//1.Print numbers from 1 to 10 using a while loop.

console.log("numbers from 1 to 10");
let i = 1;
while (i <= 10) {
  console.log("number:", i);
  i++
}

//2.Print even numbers between 1 and 50.
let i=1;
while (i <= 50) {
  if (i % 2 === 0) {
    console.log("even:", i);

  }
  i++
}

//3.Print odd numbers between 1 and 30.

let i=1;
while ( i <= 30) {
  if (i % 2 !== 0) {
    console.log("odd:", i);
  }
  i++;
}

//4.Print the multiplication table of 5.

let i = 1;
while (i <= 10) {
  console.log(`${i} x ${5} = ${i * 5}`);
  i++;
}

//5.Print numbers from 10 to 1 (reverse order).
let i=10;
console.log("numbers from 10 to 1");
while ( i >= 1) {
  console.log("number:", i);
  i--;
}

//6.Find the sum of numbers from 1 to 100.
let sum = 0;
let i=1;
while ( i <= 100) {
  sum += i;
  i++
}
console.log(`sum of 100 number = ${sum}`);

//7.Print all numbers between 1 and 100 that are divisible by 3.
let i=1;
while ( i <= 100) {
  if (i % 3 === 0) {
    console.log(`${i} divisible by 3`);

  }
  i++
}

//8.Print the first 10 natural numbers.
let i=1;
while( i <= 10) {
  console.log(`natural numbers= ${i}`);
  i++;
}

//9.Find the sum of all even numbers between 1 and 50.

let sumEven = 0;
let i=1;
while( i <= 50) {
  if (i % 2 === 0) {
    sumEven += i;
  }
  i++
}
console.log(`sum of even numbers from 1 to 50 = ${sumEven}`);

//10.Find the factorial of a given number.
let number = 5;
let i=1;
let factorial = 1;
while ( i <= number) {
  factorial *= i;
  i++;
}
console.log(`factorial of ${number}  = ${factorial}`);

//11.Count how many numbers between 1 and 100 are divisible by 5.
let count = 0;
let i=1;
while ( i <= 100) {
  if (i % 5 == 0) {
    count++;
  }
  i++
}

console.log(
  `count of  numbers between 1 and 100 are divisible by 5 = ${count}`
);

//12.Print all factors of a given number.
const input = 124;
let i=1;
console.log(`factors of ${input}`);
while ( i <= input) {
  if (input % i === 0) {
    console.log(i);
  }
  i++
}

//13.Reverse a given number using a for loop.
let i=0;
let Number3 = 234;
let teemp = Number3;
let rev = 0;
while ( i <= teemp) {
  rev = (teemp % 10) + rev * 10;
  teemp = parseInt(teemp / 10);
  i++
}
console.log(`reverse of ${Number3} = ${rev}`);

//14.Check whether a given number is a prime number.
let flag = 1;
let i=2;
let prime = 5;
while ( i <= prime / 2) {
  if (prime % i === 0) {
    flag = 0;
  }
  i++
}
console.log(!flag ? `${prime} is not prime` : `${prime} is  prime`);

//15.Print all prime numbers between 1 and 50.
let flag1 = 0;
let i=2
let j=2
while ( i <= 50) {
  flag1 = 0;

  while ( j <= i / 2 ){
    if (i % j === 0) {
      flag1 = 1;
      break;
    }
    j++;
  }
  if (!flag1) {
    console.log(i);
  }
  i++
}

//16.Find the sum of digits of a number.
let sumOfDigits = 0;
let n = 235;
let i=0
let t = n;
while(i <= t) {
  let digit = t % 10;
  sumOfDigits += digit;
  t = parseInt(t / 10);
  i++
}
console.log(`sum of digits of ${n} = ${sumOfDigits}`);

//do-while loop

//1.Print numbers from 1 to 10 using a do-while loop.

console.log("numbers from 1 to 10");
let i = 1;
do{
    console.log("number:", i);
    i++
}
while (i <= 10) ;
 


//2.Print even numbers between 1 and 50.
let i=1;
do {
  if (i % 2 === 0) {
    console.log("even:", i);

  }
  i++
}while (i <= 50);

//3.Print odd numbers between 1 and 30.

let i=1;
do {
  if (i % 2 !== 0) {
    console.log("odd:", i);
  }
  i++;
}while ( i <= 30);

//4.Print the multiplication table of 5.

let i = 1;
do {
  console.log(`${i} x ${5} = ${i * 5}`);
  i++;
}while (i <= 10);

//5.Print numbers from 10 to 1 (reverse order).
let i=10;
console.log("numbers from 10 to 1");
do{
  console.log("number:", i);
  i--;
}while( i >= 1) ;

//6.Find the sum of numbers from 1 to 100.
let sum = 0;
let i=1;
do {
  sum += i;
  i++
}while ( i <= 100);
console.log(`sum of 100 number = ${sum}`);

//7.Print all numbers between 1 and 100 that are divisible by 3.
let i=1;
do {
  if (i % 3 === 0) {
    console.log(`${i} divisible by 3`);

  }
  i++
}while ( i <= 100);

//8.Print the first 10 natural numbers.
let i=1;
do {
  console.log(`natural numbers= ${i}`);
  i++;
}while( i <= 10);

//9.Find the sum of all even numbers between 1 and 50.

let sumEven = 0;
let i=1;
do {
  if (i % 2 === 0) {
    sumEven += i;
  }
  i++
}while( i <= 50);
console.log(`sum of even numbers from 1 to 50 = ${sumEven}`);

//10.Find the factorial of a given number.
let number = 5;
let i=1;
let factorial = 1;
do {
  factorial *= i;
  i++;
}while ( i <= number);
console.log(`factorial of ${number}  = ${factorial}`);

//11.Count how many numbers between 1 and 100 are divisible by 5.
let count = 0;
let i=1;
do {
  if (i % 5 == 0) {
    count++;
  }
  i++
}while ( i <= 100);

console.log(
  `count of  numbers between 1 and 100 are divisible by 5 = ${count}`
);

//12.Print all factors of a given number.
const input = 124;
let i=1;
console.log(`factors of ${input}`);
do {
  if (input % i === 0) {
    console.log(i);
  }
  i++
}while ( i <= input);

//13.Reverse a given number using a for loop.
let i=0;
let Number3 = 234;
let teemp = Number3;
let rev = 0;
do {
  rev = (teemp % 10) + rev * 10;
  teemp = parseInt(teemp / 10);
  i++
}while ( i <= teemp)
console.log(`reverse of ${Number3} = ${rev}`);

///14.Check whether a given number is a prime number.
let flag = 1;
let i=2;
let prime = 5;
do {
  if (prime % i === 0) {
    flag = 0;
  }
  i++
}while ( i <= prime / 2);
console.log(!flag ? `${prime} is not prime` : `${prime} is  prime`);

//15.Print all prime numbers between 1 and 50.
let flag1 = 0;
let i=2
do {
  flag1 = 0;
  let j=2
    do{
    if (i % j === 0) {
      flag1 = 1;
      break;
    }
    j++;
  } while ( j <= i / 2 );
  if (!flag1) {
    console.log(i);
  }
  i++
}while ( i <= 50);

//16.Find the sum of digits of a number.
let sumOfDigits = 0;
let n = 235;
let i=0
let t = n;
do {
  let digit = t % 10;
  sumOfDigits += digit;
  t = parseInt(t / 10);
  i++
}while(i <= t);
console.log(`sum of digits of ${n} = ${sumOfDigits}`);
