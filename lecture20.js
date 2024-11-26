//Immediately  invoked function Expressions(IIFE)

//global scope se pollution nahi chaiye+immediately execute
//global scope ke pollution se problem hoti hai kai baar use htane ke liye iife ka use kiya

//Named iife
(function chai()
{
    console.log("ChaiAurCode");
})();
//when we write two iife we should terminate the first one ; <-with this
//Unnamed iife:->
//(we have also pass the permiter in this iife)
((name)=>{
    console.log(`DataBase Connected ${name}`);
})("Vansh")