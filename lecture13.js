//objects using singleton

//const tinderuser=new Object();
//singleton object


const tinderuser={}
//non singleton object

tinderuser.id="123abc"
tinderuser.name="vansh"
tinderuser.isLoggedIn=false

console.log(tinderuser)

const regularUser={
    email:"vansh@gmail.com",
    fullname :{
        userFullName:{
            firstName:"vansh",
            lastname:"singhal"
        }
    }
    //nesting of objects
}
console.log(regularUser.fullname.userFullName.firstName)
//vansh

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj3={obj1,obj2};
console.log(obj3)
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//both object are not merged object inside object

const obj4=Object.assign({},obj1,obj2)
console.log(obj4)
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//merged
//in this target is obj1 and source is obj2
//means the values of obj2 is assign in obj1

const obj5={...obj1,...obj2}
console.log(obj5)
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//merged using spread operator


//when values comes from database++++++++++++

const user=[
    {
        id:1,
        email:"vansh@.com"
    },
    {
        id:2,
        email:"vansh2@.com"
    },
    {
        id:3,
        email:"vansh3@.com"
    }
]


console.log(tinderuser)
console.log(Object.keys(tinderuser))
//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderuser))
//[ '123abc', 'vansh', false ]
console.log(Object.entries(tinderuser))
//[ [ 'id', '123abc' ], [ 'name', 'vansh' ], [ 'isLoggedIn', false ] ]
//array of array 
//in array format or type so they can access by the properties of array

//like there are many data and we want to know that a data is there or not
console.log(tinderuser.hasOwnProperty('isLoggedIn'))
//true
user[1].email
