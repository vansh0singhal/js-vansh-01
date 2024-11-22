function one()
{
    const name="vansh";
    function two()
    {
       
        const website="youtube"
        console.log(name)
    }
   // console.log(website)
   //one cannot accces two property
    two()
}
one()
//child can access the values of parent
//but parrent can not

//++++++++++++++INTERESTING++++++++++++++++//
//there are two ways of making function in java script
//1.(Normal function)
console.log(addone(5))
function addone(num)
{
    return num+1
}
//in function one we can call function one before its defination
//2.(also known as expressions)
// console.log(addtwo(3))
const addtwo=function(num2)
{
    return num2+2
}
//but in function two we can not call before the function defination
console.log(addtwo(3))