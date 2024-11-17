//objects are defined by two methods 
//literls and singleton(by constructor)

// +++++++++++++objects literals++++++++++++++++
 const mysym=Symbol("key1");
const jsuser={
    name:"vansh",
    //by default key are string
    //"name"
    "full_name":"vansh singhal",
    //there is no way that it cam access by (.) method
     [mysym]:"mykey1",
    //now this refered as symbol
    age:21,
    location:"Meerut",
    isLoggedIn: false,
    lastLoginDays: ["monday","sunday"]

}
console.log(jsuser.location)

console.log(jsuser["location"])

//console.log(jsuser.full_name)->this is not possible

console.log(jsuser["full_name"])
console.log(jsuser[mysym])
//this gives the data types string but we need symbol

//override values
jsuser.name="singhal"
//Object.freeze(jsuser);
//now the values of object can not change
jsuser.name="sh";
//this will not change beecause we used freze 
console.log(jsuser["name"])
console.log(jsuser)

jsuser.greeting=function()
{
    console.log("hello")
}
jsuser.greetingtwo=function()
{
    console.log(`heelo jsuser2,${this.name} is this`);
}
//console.log(jsuser.greeting)
//[Function (anonymous)]
console.log(jsuser.greeting())

console.log(jsuser.greetingtwo())