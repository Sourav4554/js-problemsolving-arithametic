//object
const student={
rollNo:1,
name:'alan',
pass:true
}

//object constructor
const object=new Object();
object.id=1;
object['name']='virat'
object['profetion']='cricket'
console.log(object)

//object constructor function

function Dog(name,breed){
this.name=name,
this.breed=breed
}

let dog1=new Dog('mikku','lab')
console.log(dog1)

//using class
class Car{
constructor(name,color){
 this.name=name,
 this.color=color
}
display(){
console.log(`brand:${this.name}   color:${this.color}`)
}
}
const car1=new Car('BMW','black')
const car2=new Car('Audi','White')
car1.display()
car2.display()

//crud in object
const openings={
  name:'MERN stack developer',
  skills:['Mern']
}
console.log(openings)
//add
openings.salary=25000
console.log(openings)
//modify
openings.name='React developer'
console.log(openings)

//remove
delete openings.skills
console.log(openings)

//acess value
console.log(openings[`name`])
console.log(openings.name)

//check key in object
console.log('name' in openings)
console.log(openings.hasOwnProperty('skills'))

for(let key in openings){
console.log(openings[key])
}

console.log(Object.keys(openings))
console.log(Object.entries(openings))
console.log(Object.values(openings))


//Map
let myMap = new Map();
let anotherMap = new Map([
    ['name', 'kkk'],
    ['age', 30],
    ['city', 'kochi']
]);
console.log(anotherMap);

//add values
myMap.set('name','sourav')
myMap.set('age',21)
myMap.set('course',"MERN")
myMap.set(false,'not complted')

console.log(myMap)

//retrieve
console.log(myMap.get('course'))

//check key
console.log(myMap.has('name'))

//delete
myMap.delete(false)
console.log(myMap)