//++++++++Array+++++++++//
let arr1=["vansh","singhal","hello","chaiaurcode"];
console.log(arr1)

const myHeros=["IronMan","SuperMan","Thor"];
console.log(myHeros)

//another way of initialsing array
const arr2=new Array("hello","world","chai","aur","code");
console.log(arr2)

//++++++++++++++++++++++Array Methods++++++++++++//
arr1.push(21);
arr1.push("vanshhello")
console.log(arr1);

arr1.pop()
console.log(arr1)

arr1.unshift(9);
//before unshift [ 'vansh', 'singhal', 'hello', 'chaiaurcode', 21 ]
//after unshift
console.log(arr1)
// [ 9, 'vansh', 'singhal', 'hello', 'chaiaurcode', 21 ]
//now in unshift the value 9 is added in starting so whole array is shifted so this will inscrease the load on computer
 

arr1.shift()
console.log(arr1);
//[ 'vansh', 'singhal', 'hello', 'chaiaurcode', 21 ]
//9 is removed 
//shift work like pop but from starting


let myArray=arr1.join();
console.log(arr1);
//[ 'vansh', 'singhal', 'hello', 'chaiaurcode', 21 ]
console.log(myArray);
//vansh,singhal,hello,chaiaurcode,21
//the difference is the join made that array into string

//+++++++slice++++ splice+++++//

let arraysp=["hello","world","duniya","chaiaurcode","vansh","singhal"];
console.log(arraysp);

const arrsp=arraysp.slice(1,4);
console.log(arrsp)
//1 is include 4 is exclude
//[ 'world', 'duniya', 'chaiaurcode' ]
console.log(arraysp);
//[ 'hello', 'world', 'duniya', 'chaiaurcode', 'vansh', 'singhal' ]

const arrsplice=arraysp.splice(1,4);
console.log(arrsplice)
//[ 'world', 'duniya', 'chaiaurcode', 'vansh' ]
//1 and 4 both are included
console.log(arraysp)
//in slice and splice the basic differnece is the slice/splice(a,b)
//in slice b is excluded and in splice b is included
//but the main differnce is different
//in slice function their is no change in original array
//but in splice function the original array changed
//only remaining values are left in orginal array which are not range in specified in splice function







