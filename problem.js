//1)Write a JS program to add two numbers: 12 and 8.
const number1 = 12;
const number2 = 8;
const result = number1 + number2;

console.log("sum of" + number1 + "+" + number2 + "=" + result);

//2)Subtract 15 from 45 and print the result
const number3 = 45;
const number4 = 15;

const result1 = number3 - number4;
console.log("result of" + number3 + "-" + number4 + "=" + result1);

//3)Multiply 7 and 9.
const number5 = 7;
const number6 = 9;

const product = number5 * number6;
console.log("product of" + number5 + "x" + number6 + "=" + product);

//4)Divide 144 by 12.
const number7 = 144;
const number8 = 12;

const quotient = number7 / number8;
console.log("quatient of" + number7 + "/" + number8 + "=" + quotient);

//5)Find the remainder when 29 % 5.
const number9 = 29;
const number10 = 5;

const remainder = number9 % number10;
console.log("Remainder of " + number7 + "/" + number8 + "=" + quotient);

/*
 6)Write a program to convert Celsius to Fahrenheit using the formula:
F = (C * 9/5) + 32

*/
const celcious = 28;
const Fahrenheit = (celcious * 9) / 5 + 32;

console.log("Fahrenheit = ", Fahrenheit);

/*7)Calculate the area of a rectangle — inputs: length = 12, width = 7.
 *area=length*width
 */

const length = 12;
const width = 7;
const area = length * width;
console.log("area of rectangle=", area);

/**
 * 8)Write a program that adds 10 to a number, multiplies by 2, and then subtracts 5.
 * randomNumber=40
 *
 *
 */

const randomNumber = 30;
const add = 10;
const mul = 2;
const sub = 5;

const answer = (add + randomNumber) * mul - sub;
console.log(answer);

/**
 * 9)Use arithmetic to find the average of 5 numbers: 10, 20, 30, 40, 50.
 * formula:average=total of given numbers/number of give numbers
 *
 */
const total = 10 + 20 + 30 + 40 + 50;
const average = total / 5;
console.log("average=", average);

/**
 * 10)Write a program to calculate the simple interest:
  formula:SI = (P × T × R) / 100
  *P: Principal (the initial sum of money borrowed or invested)
  *R: Annual Interest Rate (as a decimal, e.g., 5% = 0.05, or as a percentage, e.g., 5%)
  *T: Time (the duration in years). 
 */

const investedMoney = 20000;
const anualInterest = 0.05;
const Time = 5;

const simpleInterest = investedMoney * Time * anualInterest;
console.log("simple interest =", simpleInterest);

/**
 * 11)Write a program that increases a salary by 20%
 * //Formula: ((NewSalary-CurrentSalary)/ CurrentSalary)x 100
 */
const CurrentSalary = 35000;
const IncreaseAmount = CurrentSalary * 0.2;
const newSalary = IncreaseAmount + CurrentSalary;

////const Incremented=((newSalary-CurrentSalary)/CurrentSalary)*100
console.log(" increases a salary by 20%", newSalary);

/**
 * 12)A shopkeeper increases the price of an item by 18%. If the original price is 450, find the new price.
 *
 *
 */
const currentPrice = 450;
const IncreasedPercentage = 0.18;
const IncreasedAmount = currentPrice * IncreasedPercentage;
const newPrice = IncreasedAmount + currentPrice;

console.log("new price", newPrice);

/**
 *13)A student scored marks: Math = 78, Science = 82, English = 90. Find the total and percentage.
 * percentage=(calculatedtotal/total)*100
 */
const total1 = 78 + 82 + 90;
const percentage = (total / 300) * 100;

console.log("total", total);
console.log("percentage", percentage);

/**
 * 14)A car travels 560 km using 40 liters of fuel. Find mileage (km/l).
 * milage=distancecovered/fuelconsumed
 */
const distanceCovered = 560;
const fuelConsumed = 40;

const milage = distanceCovered / fuelConsumed;
console.log("milage", milage);

/**
 * 15)Write a program to split a restaurant bill among 4 people after adding 7% tax.
 * formula:
 */
const currentBill = 1000;
const tax = 0.07;
const numberOfpeople = 4;
const newBillIncludeTax = 1000 * 0.07;
const newBill = currentBill + newBillIncludeTax;
const amount = newBill / numberOfpeople;

console.log("restaurant bill among 4 people after adding 7% tax" + amount);

//** Section-2 **/

/*1)Write a JS program to calculate the perimeter of a square (side = 8)
 * formula=side+side+side+side || side*4
 */
const side = 4;
const perimeter = side * 4;
console.log("perimeter of square= ", perimeter);

/*2)Find the cube of a number using **.
 *
 */

const num = 3;
const cube = 3 ** 3;
console.log("cube of " + num, cube);

/**
 * 3)If a shop sells 3 items costing 120, 75, and 90, calculate the total and average cost.
 */

const product1 = 120;
const product2 = 75;
const product3 = 90;
const numberOfProducts = 3;
const TotalCost = product1 + product2 + product3;
const averageCost = TotalCost / numberOfProducts;

console.log(`totalcost= ${TotalCost} \n averagecost = ${averageCost}`);

/**
 * 4) Convert minutes into seconds (input = 15).
 * formula=minutes*60
 */
const minutes = 15;
const seconds = minutes * 60;
console.log(`${minutes} minutes = ${seconds} seconds`);

/**
 * 5)A person runs 12 km in 1 hour. How many meters per minute is this?
 * 12000 m in 60 minute
 * meters per  minute = 12000/60
 */

const personRunPerKm = 12;
const PersonRunPerHr = 1;
const personRunPerMeter = personRunPerKm * 1000;
const personRunPerMinute = 1 * 60;

const metersPerMinute = personRunPerMeter / personRunPerMinute;
console.log(`meters per minute=${metersPerMinute}`);

/**
 * 6)Compute ((25 - 5) * 3) / 2.
 */

console.log(`((25 - 5) * 3) / 2. = ${((25 - 5) * 3) / 2}`);

/**
 * 7. Given x = 15; y = 4; find:quotient
 */
const x = 15;
const y = 4;
const Quotient = x / y;
console.log(`Quotient of ${x} and ${y} = ${Quotient}`);

/**
 * 8)Write a program to calculate the volume of a cube using side ** 3.
 * formula:volume of cube = a*a*a;
 */
const sideOfCube = 5;
const volumeOfCube = 5 ** 3;

console.log(`volume of cube = ${volumeOfCube}`);

/**
 * 9)Increment a variable by 5 using +=.
 */
const variable = 20;
console.log(`increment by 5 = ${variable + 5}`);

/**
 * 10)Decrease a number by 30% using arithmetic operators.
 * number=150
 * result=number*(1-percentage/100)
 *
 */
const number = 100;
const percentage1 = 30;

const answer1 = number * (1 - percentage1 / 100);

console.log(`after decresing 30% from 150 = ${answer1}`);

/**
 * 11)Check if two numbers are equal: num1 = 10, num2 = "10" using == and ===
 *
 */

const num3 = 10;
const num4 = "10";

console.log(num3 == num4 ? "both are equal" : "not equal");
console.log(num3 === num4 ? "both are equal" : "not equal");

/**
 * 12)Check which number is greater: 25 or 19.
 */
console.log(19 > 25 ? "19 is greater" : "25 is greater");

/**
 * 13. Write a program to check if a person is eligible to vote (age ≥ 18).
 */

const age = 22;
console.log(age >= 18 ? "Eligible for vote" : "not eligible for vote");

/**
 *14. Compare two strings: "apple" and "banana" using < operator.
 */
console.log("apple" < "banana"); //alphabetic checking

console.log("a" > "A");

/**
 *15. Check if a number lies between 50 and 100.
 */
const checkNumber = 88;

console.log(
  checkNumber > 50 && checkNumber < 100
    ? `${checkNumber} is between 50 and 100`
    : `${checkNumber} is not between 50 and 100`
);

/**
 * 16. Compare two variables and print:"Both are same" "Not equal"
 */
const variable1 = 789;
const variable2 = 765;

console.log(variable1 === variable2 ? "Both are same" : "Not equal");

/**
 * 17. Check if the length of "hello" is equal to the length of "world".
 */

const lenghtOfhello = "hello".length;
const lenghtOfWorld = "world".length;

console.log(
  lenghtOfWorld === lenghtOfhello ? "equal length" : "not equal length"
);

/**
 *18. Check if a number is positive, negative, or zero using comparison operators.
 */
const Num = 67;
console.log(Num > 0 ? "positive" : "negative");
console.log(Num === 0 ? "zero" : "not zero");

/**
 * 19. Compare two floating-point numbers: 3.14 and 3.140.
 */

console.log(3.14 === 3.14);

/*
  20. Perform bitwise AND on 6 & 3.
*/
console.log(6 & 3);

/**
 * 21. Perform bitwise OR on 10 | 4
 */
console.log(10 | 4);

/**
 * 22. Compute ~7 (bitwise NOT)
 */

console.log(~7);
/**
 * 23. Evaluate 12 ^ 5 (XOR).
 */
console.log(12 ^ 5);
/**
 * 24. Calculate ((7 & 3) | (5 ^ 2)).
 */
console.log((7 & 3) | (5 ^ 2));

/**
 * 25)A phone originally costs 12,000. A store gives a 22% discount. Find the final price.
 */
const originalCost = 12000;
const discount = 22;
const finalPrice = 12000 * (1 - discount / 100);

console.log(`fina price= ${finalPrice}`);

/**
 * 26)A student's attendance Total classes = 200, attended = 156 Check if percentage ≥ 75%.
 *
 */
const TotalClasess = 200;
const attended = 156;

const percentage2 = (156 / 200) * 100;

console.log(
  percentage2 >= 75
    ? `above 75% [${percentage2}%]`
    : `less than 75 % [${percentage2}%]`
);

/**
 * 27)Electricity bill:Units = 350 Rate = 6.5 per unit
      Calculate total.
 */

const Units = 350;
const Rate = 6.5;
const Total = Units * Rate;

console.log(`Eletricity bill = ${Total}`);

/**
   * 28)44. Salary = 25,000
            Bonus = 15%
            Tax = 5%
            Find the net salary.
   */
const Salary = 25000;
const Bonus = 15 / 100;
const BonusAmount = Salary * Bonus;
const salaryAfterBonous = BonusAmount + Salary;
const Tax = 5;
const netSalary = salaryAfterBonous * (1 - Tax / 100);

console.log(`net slary = ${netSalary}`);

/**
 * 29)Determine if the year entered is a leap year using comparison + logical operators.
 */

const year = 2024;

console.log(
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? "its leapyear"
    : "not leap year"
);

/**
 * 30)Base = 1500 per day Fine if late = 200
 *   Calculate total if rented for 3 days and returned late.
 */

const basePay = 1500;
const fine = 200;
const rended_3_days = basePay * 3;

console.log(
  `total if rented for 3 days and returned late = ${rended_3_days + fine}`
);

/**
     * 31)48. Movie ticket booking:
          If age < 10 OR age > 60 → discount = true
          Check if discount applies.
     */

const Age = 61;

console.log(Age < 10 || Age > 60 ? "Discount" : "no discount");

/**
 * 32)Petrol price increases by 6%. If original price = 102, find new price.
 */
const petrolPrice = 102;
const Increases = 0.06;
const IncreasedPrice = 102 * 0.06;

console.log(`New price= ${IncreasedPrice + petrolPrice}`);

/**
 * 33)50. A student has scores in 4 subjects. Check if average ≥ 90 to award a scholarship.
 */

const subject1 = 100;
const subject2 = 100;
const subject3 = 100;
const subject4 = 100;
const Average = (subject1 + subject2 + subject3 + subject4) / 4;

console.log(
  Average >= 90 ? "eligible for scholarship" : "not eligible for a scholarship"
);
