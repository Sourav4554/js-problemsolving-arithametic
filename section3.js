/**
 * 1. A company decided to give bonus of 5% to employee if his/her year of service is more than
       5 years. Ask user for their salary and year of service and print the net bonus amount.
 */

const bonous=5;
const salary=parseInt(prompt("Enter your salary:"));
const year=parseInt(prompt("How many years you work with us:"));
const bonousAmount=salary*(bonous/100)

if(!salary || !year){
    console.log('please enter the details')
}else if(salary<=0 || year<=0){
    console.log('invalid number')
}
else if(year>5){
    console.log(`Bonous amout is ${bonousAmount} now salary is ${salary+bonousAmount}`)
}else{
    console.log(`bonous only for employees work more than 5 yars`)
}

/**
 * 2. Write a program to calculate the electricity bill (accept number of unit from user) according
 * to the following criteria :
   Unit Price
        a. First 100 units no charge
        b. Next 100 units Rs 5 per unit
        c. After 200 units Rs 10 per unit
      (For example if input unit is 350 than total bill amount is Rs2000)
 */

const units = parseInt(prompt("Enter your eletricity used unit:"));
let chargeFirst,chargeSecond,chargeThird,total=0;
if (!isNaN(units) && units >= 0) {
     if(units<=100){
          chargeFirst=100*0
          total=chargeFirst;
     }else if(units<=200){
          chargeSecond=100*5
          total=chargeSecond;
     }else{
          chargeSecond=100*5
         let newunit=units-200;
          chargeThird=newunit*10;
          total=chargeSecond+chargeThird
     }
     console.log(`charge for ${units} units = ${total}`)
} else {
  console.log("invalid number");
}

/**
 * 3. Write a program to accept a number from 1 to 7 and display the name of the day like 1 for
      Sunday , 2 for Monday and so on.
 */

     const day=parseInt(prompt("Enter the day in number:"))

    if(!day){
        console.log('please enter the day in  number')
    }else if(day<=0){
        console.log('Enter a valid number')
    }else{
    switch (day){
        case 1:
            console.log('sunday');
            break;
        case 2:
            console.log('monday');
            break;
        case 3:
            console.log('Tuesday');
            break;
        case 4:
            console.log('wednesday')
            break;
        case 5:
            console.log('thursday')
            break;
        case 6:
            console.log('friday')
            break;
        case 7:
            console.log('saturday')
            break;
        default:{
            console.log('Enter a number b/w 1- 7')
            break;
        }
    }
}

/**
 * 4. Accept any city from the user and display monument of that city.
      City Monument
a. Delhi Red Fort
b. Agra Taj Mahal
c. Jaipur Jal Mah

 */
const city1='delhi';
const city2='agra';
const city3='jaipur';
const monument1='Red Fort'
const monument2='Taj Mahal'
const monument3='Jal Mah'

const cityName=prompt(`Enter one city from this option:\n a) ${city1} \n b)${city2} \n c)${city3}`)

if(cityName){
    switch(cityName.toLowerCase()){
        case city1:
            console.log(monument1);
            break;
        case city2:
            console.log(monument2);
            break;
        case city3:
            console.log(monument3);
            break;
        default:
            console.log('invalid city name')
            break;

    }
}else{
    console.log('please enter a city')
}

/**
 * 5. Write a program to check whether the last digit of a number( entered by user ) is divisible
      by 3 or not.
 */

  const number=parseInt(prompt("Enter the number:"))
  let lastDigit;
  if(number && number>0){
          lastDigit=number%10
          if(lastDigit%3===0){
               console.log(`${lastDigit} divisible by 3`)
          }else{
               console.log(`${lastDigit} is not divisible by 3`)
          }
     }else{
          console.log('this number is invalid for calculation')
     }

/**
 * 6. Write a program to accept the cost price of a bike and display the road tax to be paid
      according to the following criteria :
      Cost price (in Rs) Tax
          a. > 100000 15 %
          b. > 50000 and <= 100000 10%
          c. <= 50000 5%
 */

const costPrice = parseInt(prompt("Enter the cost price of bike:"));
let tax;
if (!isNaN(costPrice) && costPrice > 0) {
  if (costPrice <= 50000) {
    tax = costPrice * (5 / 100);
  } else if (costPrice > 50000 && costPrice <= 100000) {
    tax = costPrice * (10 / 100);
  } else {
    tax = costPrice * (15 / 100);
  }
  console.log(`the road tax for costprice ${costPrice} = ${tax}`);
} else {
  console.log("please enter a valid number");
}

/**
 * 7. Write a program that takes a number as input and checks whether it is:
          a. "Even and divisible by 4"
          b. "Odd and greater than 10"
          c. "Neither of the above"
 */

  const checkNumber = Number(prompt("Enter a Number:"));

if (!isNaN( checkNumber ) &&  checkNumber  >= 0) {
  if (checkNumber % 2 !== 0 && checkNumber > 10) {
    console.log(`${checkNumber} is Odd and greater than 10`);
  } else if (checkNumber % 2 === 0 && checkNumber % 4 === 0) {
    console.log(`${checkNumber} is Even and divisible by 4`);
  } else {
    console.log(`${checkNumber} is neither of the above`);
  }
} else {
  console.log("Enter a valid number");
}

/**
 * 8. Write a program that checks the total purchase amount and applies discounts:
          a. If the amount is greater than $100, log "You get a 20% discount!".
          b. If the amount is between $50 and $100 (inclusive), log "You get a 10% discount!".
          c. If the amount is less than $50, log "No discount available."
 */

const amount=Number(prompt(`Enter the purchase amount:`))
console.log(amount)
let total=0,offer;
if(!isNaN(amount) && amount>0){
     console.log('kerii')
     if(amount<50){
          console.log('no discount available')
     }else if(amount>=50 && amount<=100){
          offer=amount*(10/100);
          total=amount-offer
          console.log(`you get 10% discount`)
     }else{
          offer=amount*(20/100)
          total=amount-offer
          console.log(`you get a 20% discount`)
     }
     console.log(`final price = ${total}`)
}else{
     console.log(`enter a valid Number`)
}

/**
 * 9. Write a program to calculate the monthly charge for a mobile data plan based on datausage:
      Data Usage Charge

          a. Up to 2Gb Rs 200
          b. 2-10Gb Rs 200 + Rs 50 per Gb over 2 Gb
          c. Above 10 Gb Rs 600 + Rs 50 per Gb over 10 Gb

     Example:If the data usage is 15 GB, calculate the total charge.
 */
 const plan=parseInt(prompt('Enter the data usage:'))
 let bill;
if(!isNaN(plan) && plan>=0){
     if(plan<=2){
          bill=200
     }else if(plan>2&&plan<=10){
       bill=200+(plan-2)*50
     }else{
          bill=600+(plan-10)*50
     }
     console.log(`bill for ${plan} GB = ${bill}`)
}else{
console.log('invalid number')
}

/**
 * 10. Write a program to calculate the parking fee based on hours parked:
     Hours Parked Charge
     a. Upto 1 hour Rs 20
     b. 2-5 Hour Rs 20 + Rs 10 per Hour over 1 hour
     c. Above 5 Hour Rs 60 + Rs 15 per Hour over 5 Hours

     Example: If the parking duration is 8 hours, calculate the total fee
 */
  const parkingHours=parseInt(prompt('Enter parking time in hours'))
  let parkingBill;
  if(!isNaN(parkingHours) && parkingHours>=0){
     if(parkingHours===1){
          parkingBill=20
     }else if(parkingBill>1 && parkingBill<=5){
          parkingBill=20+(parkingHours-1)*10
     }else{
      parkingBill=60+(parkingHours-5)*15
     }
     console.log(`bill for ${parkingHours} hrs = ${parkingBill}`)
  }else{
    console.log('invalid parking hours')
  }
/**
 * 11)Write a program to check if a number is positive, negative, or zero using if–else-if.
 */

const Number1=parseInt(prompt(`Enter a Number:`))
if(!isNaN(Number1)){
     if(Number1>0){
          console.log(`${Number1} number is positive`)
     }else if(Number1<0){
          console.log(`${Number1} number is negative`)
     }else{
          console.log(`number is zero`)
     }
}else{
console.log('please enter a number')
}

/**
 * 12)Ask the user’s age and check using a ternary operator whether they are an adult or minor.
 */

 const age=parseInt(prompt("Enter your age:"))

if(!isNaN(age) && age>=0 && age<120){
     console.log('keriii')
     console.log(age>=18?"adult":'minor')
}else{
     console.log(`Enter a valid age`)
}

/**
 * 13)Check if a number is divisible by 2 AND 3 using logical operators (&&, ||).
 */
// const number=parseInt(prompt("Enter the Number:"));

if(!isNaN(number) && number>=0){
     console.log(number%2===0 && number%3===0?`${number} is devisible by 2 and 3`:`not divisible by both numbers 2 and 3`)
}else{
     console.log('invalid number')
}

/**
 * 14). Use nested if to check login:
•	If username is "admin"
     Inside check: if password is "1234"
     Print "Login successful"
     Else print "Wrong password".
 */

const user=prompt('Enter user name:').toLocaleLowerCase()
const password=prompt('Enter password')
if(user && password){
     if(user==='admin'){
          if(password==='1234'){
               console.log('login sucessfull')
          }else{
               console.log('invalid credentials')
          }
     }else{
       console.log('invalid credentials')
}}else{
     console.log('please enter details')
}

/**
 * 15)6. Check if a given temperature:
•	35 → "Very Hot"
•	25–35 → "Warm"
•	15–25 → "Cool"
•	< 15 → "Cold"

 */

 const temperature=parseInt(prompt(`Enter the temperature`))

if(!isNaN(temperature)){
     if(temperature<15){
          console.log('cold')
     }else if(temperature>=15 && temperature<=25){
          console.log('cool')
     }else if(temperature>25 & temperature<=35){
          console.log('warm')
     }else{
     console.log('very hot')
     }
}else{
console.log(`please enter a valid number`)
}

/**
 * 16).Using logical operators, check if a user is eligible for a loan:
•	     Age ≥ 21
•	     Salary ≥ 25000
 */

const age=parseInt(prompt('Enter your age:'))
const salary=parseInt(prompt('Enter your salary:'))

if(!isNaN(age) && !isNaN(salary) && age>0 && salary>=0){
 console.log(age>=21&&salary>=25000?'eligible for loan':'not eligible for loan')
}else{
console.log('invalid details')
}

/**
 * 17) Use nested if to check exam result:
•	  If marks ≥ 40 → Passed
        Inside check: if marks ≥ 90 → "Excellent"
       Else → Failed.
 */

const subjectMark=parseInt(prompt(`Enter the mark of physics:`))

if(!isNaN(subjectMark) && subjectMark>=0){
     if(subjectMark>=40){
          if(subjectMark>=90){
               console.log('Excellent')
          }else{
               console.log('passed')
          }

     }else{
          console.log('failed')
     }
}else{
console.log(`invalid mark`)
}

/**
 * 18)Use a ternary operator to check if a number is even or odd.
 */
const number=parseInt(prompt('Enter a number'))
if(!isNaN(number) && number>=0){
     console.log(number%2==0?'its an even number':'odd number')
}else{
console.log('invalid numbers')
}

/**
 * 19)Use switch-case to evaluate grades:
      'A' → Excellent
      'B' → Good
      'C' → Average
      'D' → Poor
      Any other input → Invalid grade
 */

const grade=prompt('Enter your grade:').toUpperCase();

switch(grade){
     case 'A' :
          console.log('Excellent');
          break
     case 'B':
          console.log('Good')
          break;
     case 'C':
          console.log('Average')
          break
     case 'D':
          console.log('Poor')
          break
     default:
          console.log('invalid grade')
          break
}

/**
 * 20)Check if a number is between 10 and 50 using logical AND.
 *
 */
const number=parseInt(prompt("Enter a number:"))

if(!isNaN(number)){
     console.log(number>10&&number<50?'this number is b/w 10 and 50':'this no is not b/w 10 and 50')
}else{
console.log('invalid number')
}

/**
 * 21)12. Use nested if to determine movie ticket pricing:
•	If age < 12 → Child ticket
     Inside check: if age < 5 → Free entry
     Else if age > 60 → Senior discount
     Else → Normal ticket.
 */

const age = parseInt(prompt("Enter your age:"));

if (!isNaN(age) && age >= 0) {
  if (age < 12) {
    if (age < 5) {
      console.log("free entry");
    } else {
      console.log("child ticket");
    }
  } else if (age > 60) {
    console.log("senior discount");
  } else {
    console.log("normal ticket");
  }
} else {
  console.log("invalid age");
}

/**
 * 22)Use if-else to check if two strings are equal (case-sensitive).
 */

const string1=prompt("Enter first string:");
const string2=prompt("Enter second sssssssstring:")

if(string1 && string2){
     console.log(string1===string2?"both are equal":"not equal")

}else{
     console.log('please enter string')
}

/**
 * 23)Use switch-case to display month names based on month number.
 */

// const month=parseInt(prompt("Enter the month in number"));

switch(month){
     case 1:
          console.log('January');
          break;
     case 2:
          console.log('February');
          break;
     case 3:
          console.log(`March`);
          break;
     case 4:
          console.log('April');
          break;
     case 5:
          console.log('May')
          break;
     case 6:
          console.log('June')
          break;
     case 7:
          console.log('July');
          break;
     case 8:
          console.log('August');
          break;
     case 9:
          console.log(`September`);
          break;
     case 10:
          console.log('October');
          break;
     case 11:
          console.log('November')
          break;
     case 12:
          console.log('December')
          break;
     default:
          console.log('invalid number')
          break;
}

/**
 * 24)Use nested if to check online shopping order status:
•	 If paymentDone is true
      Inside check: if stockAvailable is true → "Order placed"
      Else print "Payment pending".
 */

let paymentDone=false;
let stockAvailable=true;

if(paymentDone) {
     if(stockAvailable){
          console.log('order placed')
     }else{
         console.log('stock finished')
     }
}else{
     console.log('payment pending')
}

/**
 * 25)Use a ternary operator to check if a user has enough balance to purchase an item.
 */

const itemPrice = 345;
const userBalance = parseInt(prompt("Enter the balance in your ac:"));

if (!isNaN(userBalance)) {
  console.log(
    userBalance >= itemPrice ? "enough balanse" : "not enough balance "
  );
} else {
  console.log("please enter the amount");
}

/**
 * 26)Use if-else to check if a given character is a vowel or consonant.
 */

const character = prompt("Enter a single character (a,b,A.B )");
const isNumber=Number(character)

if(typeof(isNumber)!=='number'){
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
  console.log("vowel");
} else {
  console.log("consonant");
}
}else{
console.log('its not a charcter')
}

/**
 * 27) Use switch-case to print traffic signal meaning:
       red → Stop
       yellow → Ready
       green → Go
       (default → Invalid signal)
 */

const traffic='red'
switch(traffic){
     case 'red':
          console.log('stop');
          break;
     case 'yellow':
          console.log('Ready')
          break;
     case 'green':
          console.log('Go')
          break;
     default:
          console.log('Invalid signal')
}

/**
 * 28)Use nested if to validate ATM withdraw:
•	If accountActive
     Inside check: if balance ≥ amount → "Withdraw successful"
     Else → "Insufficient balance"
     Else → "Account inactive"
 */

let accountActive=true
let balance=3000;
let amount=700000
if(accountActive){
    if(balance>=amount){
       console.log('Withdraw sucessfull')
     }else{
       console.log('insufficient balance')
     }
}else{
console.log('acount inactive')
}
