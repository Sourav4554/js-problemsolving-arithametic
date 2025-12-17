//for loop
for (let i = 1; i <= 10; i++) {
  console.log("count", i);
}

console.log("\n\n");

for (let j = 10; j >= 1; j--) {
  console.log("count", j);
}

console.log("\n\n");

//while loop
// let i=20;
// while(i<=30){
// console.log('count',i)
// i++;
// }

console.log("\n\n");
//do-while loop
// let j=50;
// do{
// console.log(j)
// j++;
// }while(i<=60);

//for in loop
const object = {
  name: "sourav",
  age: 22,
  course: "MERN stack",
};

for (let key in object) {
  console.log(`${key} : ${object[key]}`);
}

const array = [2, 4, 6, 8, 10];

for (let index in array) {
  console.log(`${index} = ${array[index]}`);
}


//for-of loop
const array1=[1,3,5,7,9]
for (let value of array1) {
  console.log(value);
}

const string='sourav'
for(let ch of string){
console.log(ch)
}