//1.Create an object to store a person’s name, age, and city.
const person={
    name:'sourav',
    age:21,
    city:'cherthala'
}

//2.Access object properties using dot notation and bracket notation.
console.log(person.age)
console.log(person['age'])

//3.Add a new property to an existing object.
person['course']='Mern stack'
console.log(person)

//4.Update the value of an object property.
person['course']='MERN stack'
console.log(person)

//5.Delete a property from an object.
delete person['course']
console.log(person)

//6.Loop through an object using for...in.
for(let key in person){
console.log(`${key}:${person[key]}`)
}

//7.Check if a property exists in an object.
console.log('country' in person?'exist':'not exist')

//8.Count the number of properties in an object.
  console.log(Object.keys(person).length)

//9.Create an object representing a student and calculate total marks.
const student={
 name:'sanjay',
 marks:[5,5,5]
}

const totalMark=student['marks'].reduce((total,val)=>total+=val,0)
console.log(totalMark)

//10.Convert an object into an array of keys and values.
console.log(Object.entries(student))

//11.Create a Map and add key-value pairs.
const map=new Map()
map.set('hello','javascript')
map.set(1,'one')
map.set('hello1','javascriptt')
map.set(2,'two')
console.log(map)


//12.Retrieve a value from a Map using a key.
console.log(map.get('hello'))

//13.Check if a key exists in a Map.
console.log(map.has(1))

//14.Delete an element from a Map.
map.delete('hello')
console.log(map)

//15.Find the size of a Map.
console.log(map.size)

//16.Loop through a Map using forEach
map.forEach((item)=>{
console.log(item)
})