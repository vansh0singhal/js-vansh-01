///// dates in js

let myDate=new Date()

console.log(myDate.toString());
//output Wed Aug 21 2024 22:38:30 GMT+0530


console.log(myDate.toDateString);
//output  Wed Aug 21 2024
 

console.log(myDate.toJSON());
//output:- [Function: toDateString]


console.log(myDate.toLocaleString())
// 21/8/2024, 10:40:38 pm

console.log(typeof myDate)
// object

let myNewDate=new Date(2023,0,23);
console.log(myNewDate.toDateString());
//in javascript months are started from 0;


let createDate= new Date("01-23-2020")
console.log(createDate);
//2020-01-22T18:30:00.000Z

let newDate1=Date.now();
console.log(newDate1);
//gives output in milisecond 1724261131634

console.log(createDate.getTime());
//1579717800000


console.log(Date.now())
//1724261417044 this give milisecond but we need in seconds
console.log(Math.floor(Date.now()/1000))
//now this give us second 

let newDate2=new Date()
console.log(newDate2.getMonth()+1)
