
function sayMyName()
{
    console.log("V");
console.log("A");
console.log("N");
console.log("S");
console.log("H");

}
sayMyName();

function addTwoNumbers(num1,num2)
{
    return  num1+num2
  

}
 const sum=addTwoNumbers(2,3);
 console.log(sum)
//5

function userlogin(username="sam")
{
    if(username===undefined)
    {
        console.log("enter user name")
        return
    }
    return `${username} just loggedin`
}
console.log(userlogin("vansh"));
//if we dont pass the value:->
console.log(userlogin())
//undefined just loggedin

//like if we want to give a default value to the function in case user do not give any value
//username="sam"
console.log(userlogin())
