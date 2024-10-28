//Data Types 
//1.Primitive


// 1.Stirng
// 2.Number
// 3.null
// 4.undefined
// 5.symbol
// 6.boolean
// 7.BigInt;





//java script is a dynamically typed language 
//example:-we do not nedd to specify the type of variables

const id=Symbol('123');
const id2=Symbol('123');
console.log(id==id2);
//false;

//BIGINT

const bigNumber=1234567789478382n;
console.log( typeof bigNumber)
//bigint
//n specify the bigint


// 2.Reference type or non primitive data types

// 1.Array
// 2.Objects
// 3.Functions

const heroes=["Shaktiman","nagraj","Hanuman"];

let myObj={
    name:"vansh",
    age:123,
}
console.log(myObj);

const myfun=function(){
    console.log("Hello World!")
}
myfun()
