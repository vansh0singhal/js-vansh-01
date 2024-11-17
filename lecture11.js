const marvel_heros=["Ironman","Thor","spiderman"]
const dc_heros=["Batman","Superman","Flash"];

marvel_heros.push(dc_heros);
//in this case dc_heros are add as a single element like array of array
//so they are not merged
console.log(marvel_heros);

 const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros)
//[ 'Ironman', 'Thor', 'spiderman', 'Batman', 'Superman', 'Flash' ]

//spread  ... we prefer spread

const all_new_heros=[...dc_heros,...marvel_heros]
console.log(all_new_heros)
//[ 'Batman', 'Superman', 'Flash', 'Ironman', 'Thor', 'spiderman' ]
//using spread function all values are independent
//or we can say  that they are spread


const another_array=[1,2,3,[4,5,6],7,[8,[9,10,11],12],13];
const another_array_usable=another_array.flat(Infinity);
console.log(another_array_usable);
/*[
    1, 2, 3,  4,  5,  6,
    7, 8, 9, 10, 11, 12,
   13
 ]*/
//using this flat function all elements are seperated
//infinity shows that all depth or subarray should be single
//we can specify the number how much depth we want

console.log(Array.isArray("hello"));
//output:-false because this is an string
//now we wanted make this array
console.log(Array.from("hello"))
//[ 'h', 'e', 'l', 'l', 'o' ]
//with the help of from now this is an array
console.log(Array.from({name:"vansh"}))
//[]
//this will always return object because do not specify that the array is based on keys or values


let score1=200
let score2=300
let score3=400
console.log(Array.of(score1,score2,score3))
//[ 200, 300, 400 ]
