const name="vansh";
const repoCount=50;
//poor syntax
console.log(name+ repoCount+"value");
//good way
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('vanshSinghal');

console.log(gameName[0]);

//to get the object of string

console.log(gameName.__proto__);
//{}

//to get the length of string:-
console.log(gameName.length);
//12

console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))


const newString=gameName.substring(0,3);
console.log(newString)
//0 is included and 3 is excluded

const anotherString=gameName.slice(-10,6);
console.log(anotherString);
//back se count krega -10 than wha se 4 character dega!


const newString1="    vansh.    ";
console.log(newString1);
//     vansh    //
console.log(newString1.trim());
//vansh//



const url="https_vanshsinghal101@gmail%20com";
console.log(url.replace('%20','.'));
//%20 is replaced by .//


console.log(url.includes('vansh'));
//ye search karega ki vansh url me hai ya nhi//


const stringIntoArray="vansh-singhal-b.tech-Meerut";
console.log(stringIntoArray.split('-'));
//['vansh','singhal','b.tech','Meerut']//

