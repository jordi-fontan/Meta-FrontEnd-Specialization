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

sam2.speak=function () {return 'bla bla'};
sam2.speak();

//sam1.speak(); //Reference Error

delete (sam2.age);
console.log(sam2);

delete(sam1);

//Enumerate props
Object.keys(sam1).forEach(element => {
    console.log(`${element} ${sam2[element]}` );
});

const objSymbol={};
const SIZE= Symbol();
objSymbol.color='yellow';
objSymbol['not identifier']=3;
//objSymbol.[SIZE]=8;
objSymbol.size=SIZE;
console.log(objSymbol);