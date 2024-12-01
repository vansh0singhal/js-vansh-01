//if

const isLoggedIn=true;
if(2=="2")
{
    console.log("you are logged in")
}
if(2==="2") //strict check
{
    console.log("you are logged in")
}



const temperatur=81;
if(temperatur<50)
{
    console.log("temperatue is less than 50");
}
else{
    console.log("temperature is not less tha 50");
}



let power=200;
if(power>100)
{
    let power1="fly"
    console.log(`your power is ${power1}`)
}


//implicit scope;
let testResult=85;
if(testResult>70) 
    console.log("you are pass");



const balance=700;
 if(balance<500)
{
    console.log("balance is less than 500");
}   
else if(balance<750)
{
    console.log("balance is less than 750");
}
else
{
    console.log("balance is less than 1500");
}


//multiple conditions
const userLoggedIn=true;
const debitCard=true;
if(userLoggedIn && debitCard)
{
    console.log("you can shop here")
}







    //> , < , >=, <= , == , != 