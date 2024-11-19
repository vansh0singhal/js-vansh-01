function calculateCartPrice(...num1)
{
    return num1;
}
console.log(calculateCartPrice(2));
//now if we give more than 1 value
console.log(calculateCartPrice(2,3,4))

//2 it takes only first value but we neeed sum
//we use rest 
//[ 2, 3, 4 ]
//now they are in array we can traverse array for sum further

//+++++++++++passing object in function++++++++++++++//

const user={
    username:"vansh",
    price:"999"
}
function handleObject(anyuser)
{
    console.log(`user name is ${anyuser.username} and price is ${anyuser.price}`)
}
handleObject(user);
//user name is vansh and price is 999

//++++++++++passing array in function++++++++++++++++++//

const arr=[100,200,300,400];
function returnArraySecondValue(getSecond)
{
    return getSecond[1];
}
console.log(returnArraySecondValue(arr))
//200

