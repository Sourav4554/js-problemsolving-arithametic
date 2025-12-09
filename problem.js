//1)Write a JS program to add two numbers: 12 and 8.
const number1=12;
const number2=8;
const result=number1+number2

console.log('sum of' +number1+ '+' +number2+ '=' +result)

//2)Subtract 15 from 45 and print the result
const number3=45;
const number4=15;

const result1=number3-number4;
console.log('result of' + number3 + '-' +number4+ '=' + result1)

//3)Multiply 7 and 9.
const number5=7;
const number6=9;

const product=number5*number6;
console.log('product of' + number5 + 'x' +number6+ '=' + product)

//4)Divide 144 by 12.
const number7=144;
const number8=12;

const quotient=number7/number8;
console.log('quatient of' + number7 + '/' +number8+ '=' + quotient)

//5)Find the remainder when 29 % 5.
const number9=29;
const number10=5;

const remainder=number9%number10;
console.log('Remainder of ' +number7 + '/' +number8+ '=' + quotient)

/*
 6)Write a program to convert Celsius to Fahrenheit using the formula:
F = (C * 9/5) + 32

*/
const celcious=28;
const Fahrenheit=(celcious*9/5)+32;

console.log('Fahrenheit = ',Fahrenheit)

/*7)Calculate the area of a rectangle — inputs: length = 12, width = 7.
*area=length*width
*/

const length=12;
const width=7;
const area=length*width;
console.log('area of rectangle=',area)

/**
 * 8)Write a program that adds 10 to a number, multiplies by 2, and then subtracts 5.
 * randomNumber=40
 *
 * 
 */

const randomNumber=30;
const add=10;
const mul=2;
const sub=5;

const answer=((add+randomNumber)*mul)-sub;
console.log(answer)

/**
 * 9)Use arithmetic to find the average of 5 numbers: 10, 20, 30, 40, 50.
 * formula:average=total of given numbers/number of give numbers
 * 
 */
const total=10+20+30+40+50
const average=total/5;
console.log('average=',average)

/**
 * 10)Write a program to calculate the simple interest:
  formula:SI = (P × T × R) / 100
  *P: Principal (the initial sum of money borrowed or invested)
  *R: Annual Interest Rate (as a decimal, e.g., 5% = 0.05, or as a percentage, e.g., 5%)
  *T: Time (the duration in years). 
 */

  const investedMoney=20000;
  const anualInterest=0.05;
  const Time=5;

  const simpleInterest=(investedMoney*Time*anualInterest)
  console.log("simple interest =",simpleInterest)

  /**
   * 11)Write a program that increases a salary by 20%
   * //Formula: ((NewSalary-CurrentSalary)/ CurrentSalary)x 100
   */
  const CurrentSalary=35000
  const IncreaseAmount=CurrentSalary*0.20;
  const newSalary=IncreaseAmount+CurrentSalary

 
  ////const Incremented=((newSalary-CurrentSalary)/CurrentSalary)*100
  console.log(' increases a salary by 20%',newSalary)

  /**
   * 12)A shopkeeper increases the price of an item by 18%. If the original price is 450, find the new price.
   * 
   * 
  */
 const currentPrice=450;
 const IncreasedPercentage=0.18;
 const IncreasedAmount=currentPrice*IncreasedPercentage;
 const newPrice=IncreasedAmount+currentPrice

 console.log('new price',newPrice)

 /**
  *13)A student scored marks: Math = 78, Science = 82, English = 90. Find the total and percentage.
  * percentage=(calculatedtotal/total)*100
  */
 const total1=78+82+90;
 const percentage=(total/300)*100

 console.log('total',total)
 console.log('percentage',percentage)

 /**
  * 14)A car travels 560 km using 40 liters of fuel. Find mileage (km/l).
  * milage=distancecovered/fuelconsumed
  */
 const distanceCovered=560;
 const fuelConsumed=40

 const milage=distanceCovered/fuelConsumed
 console.log('milage',milage)

 /**
  * 15)Write a program to split a restaurant bill among 4 people after adding 7% tax.
  * formula:
  */
const currentBill=1000
 const tax=0.07;
 const numberOfpeople=4;
 const newBillIncludeTax=1000*0.07;
 const newBill=currentBill+newBillIncludeTax;
const amount=newBill/numberOfpeople;

console.log('restaurant bill among 4 people after adding 7% tax'+amount)
