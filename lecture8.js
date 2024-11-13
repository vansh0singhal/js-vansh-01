const score=400;
console.log(score);
//OUTPUT:-400

const balance=new Number(401);
console.log(balance);
//OUTPUT:-[Number: 401]

console.log(score.toString().length)
//so we have convert the number into string so we have the accessof methods that are used in sting

console.log(balance.toFixed(2));
//now this is fix that only 2 precision will take
//OUTPUT:-401.00

const numberhello=253.443;
console.log(numberhello.toPrecision(3))
//it will round of the value until the precision is given


const hunderds=10000000;
console.log(hunderds.toLocaleString('en-US'));
//en-US OUTPUT:-10,000,000  by us standards


//++++++++++++++MATHS++++++++++//

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
//round of;
console.log(Math.ceil(4.1));
//it will always return the ceil value
console.log(Math.floor(4.9));
//it will always return the floor value

console.log(Math.min(2,3,4,5,1,765));
//return the minimum value;

console.log(Math.max(2,3,4,5,1,765));
//return the max value


console.log(Math.random());
//it always give the value betwenn 0-1;

console.log(Math.floor((Math.random()*10)+1));



//give the value between min and max
const min=0;
const max=10;
console.log(Math.floor(Math.random() * (max-min+1))+min);



console.log(Math.floor((Math.random()*10)+1))

console.log(Math.floor((Math.random()*10)+1));



