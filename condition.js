//if statement

const age=22;

if(age>=18){
console.log("eligible to vote")
}

//if-else statement

const inkFinger=true
if(inkFinger){
    console.log("already voted")
}else{
    console.log("not voted")
}

//Nested if statement

const number=43

if(number===55){
    if(number>50){
        if(number>40){
         console.log("not allow to use this ride")
        }
    }
}else{
console.log('allow to use this ride')
}

//if-else-ladder statement
let a=45,b=63,c=86;
if(a>b&&b>c){
    console.log(`${a} is larger`)
}else if(b>a&&b>c){
    console.log(`${b} is larger`)
}else{
    console.log(`${c} is larger`)
}

//switch-statement

const paymentMethod=''

switch(paymentMethod){
    case 'Gpay':{
        console.log('userSelected gpay')
        break;
    }
    case 'Phonepay':{
        console.log('use selected Phonepay')
    }
    case 'COD':{
        console.log(`user selects cash on delivery`)
    }
    default:{
        console.log('user nothing select')
    }
}