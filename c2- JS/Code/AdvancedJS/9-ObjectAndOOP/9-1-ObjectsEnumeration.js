// empty Object
const obj={};
// Truty
let question= (obj)?'Truty':'Falsy';
console.log(question); // not undefined

 question= ('')?'Truty':'Falsy';
console.log(question); // not undefined

//trailing commas
const sam1 = {
    name:'Sam',
    age:4,

}
console.log(sam1);

//But 
const sam2 ={name:'Sam',age:4};
console.log(sam2);