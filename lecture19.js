const user={
    name:"vansh",
    price:999,
    welcomemesage:function()
    {
        console.log(`hello ${this.name} welcome to the website`)
        console.log(this)
        /*
        hello vansh welcome to the website
{ name: 'vansh', price: 999, welcomemesage: [Function: welcomemesage] }
hello singhal welcome to the website
{
  name: 'singhal',
  price: 999,
  welcomemesage: [Function: welcomemesage]
} */
    }
}
user.welcomemesage()
//hello vansh welcome to the website
//this refer to the current context or just values
 
user.name="singhal"
user.welcomemesage()
//hello singhal welcome to the website
console.log(this)
//current context:->{}(empty because we are in node environment)

function chai()
{
    let userName="vansh singhal"
    console.log(this.userName)
}
chai()
//undefined
//this cannot be used inside a fuction
//+++++++++++++++++ARROW FUNCTION+++++++++++++++++++++//

const fnc=()=>
{
    console.log("hello")
}
const addTwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwo(2,3))
//this function can be declare in another froms

//IMPLICIT RETURN


//const addTwo=(num1,num2)=> num1+num2;


// const addTwo=(num1,num2)=>   ( num1+num2)

