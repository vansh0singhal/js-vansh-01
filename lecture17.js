let a=90;
if(true)
{
    let a=20;
    console.log(`block scope ${a}`)
    //block scope 20
    const b=30;
    //var c=40;
}
console.log(`global scope ${a}`)
//global scope 90
//gives error
//console.log(b)
//gives error
//console.log(c)
//not giving error