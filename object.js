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