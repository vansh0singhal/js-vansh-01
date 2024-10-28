let score="33";

console.log(typeof(score));
//this is called type conversioN
// like we are developer and score is come from a form and we do not
//know the type of score but w3e have work take it as a number
let createdScore=Number(score);
console.log(createdScore);
//now we have convert the string type into number
console.log("Before Conversion");
console.log(typeof(score));
console.log("After conversion:")
console.log(typeof(createdScore))


//NaN

let value1="123abc";
let numberGenerated=Number(value1);
console.log(typeof numberGenerated);
//we take a string which cannot be converted into number
//but if we try to convert it its so the type of will be converded
//but if we check the value it show NaN(not a number)
console.log(numberGenerated);
//so we have to be very carefull in theses cases in java script


//"33"-> 33
//true->1 flase->0;
//""->Boolean->false;
//"33abc"->?number=NaN


//******************OPERATIONS****************** */



// let a=69;
// let b=-a;
// console.log(b);

 console.log(1+1);
 console.log(1-1);
 console.log(1*1);
 console.log(1**3);//1^3
 console.log(1/1);

let str1="Vansh";
let str2=" Singhal";
let str3=str1+str2;
console.log(str3);

console.log("1"+2)
console.log(1+"2");
console.log("2"+3+4);
console.log(1+2+"3");


console.log(+true);//just simply covert into 1 or number
console.log(+"");//same normal conversion in 0 or number
