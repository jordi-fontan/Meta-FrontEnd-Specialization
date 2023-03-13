//Array

const fruits = ['plum','apple','pear']

// forEach
fruits.forEach((v,k)=>{console.log(`${k}.${v}`)});
/*
0.plum
1.apple
2.pear
*/


//Filter

console.log(fruits.filter((str)=>{return str.length>4}));
//[ 'apple' ]

// map
/* This method is used to map each array item over to another array's item, 
based on whatever work is performed inside the function that is passed-in to 
the map as a parameter. */

var newMap=[0,10,20,30,40,50].map( function(num) {
    return num / 10
})
console.log(newMap);

/* [ 0, 1, 2, 3, 4, 5 ] */
var a=[0,10,20,30,40,50];
var newMap=a.map( (num)=> {  return num / 10})
console.log(newMap);


/* COnverting an object to and Array
Using keys and forEach
SpeechRecognitionAlternative, using entries */

let obj ={
    a:34,
    b:'hello',
    myCoolMethod: function(x){return this.a/12;}
}
let myArr=[]
let objKeys=Object.keys(obj); // object's keys 


// Iterate over the Array of Keys
// Pushing with 2 args,(pushes both)
objKeys.forEach((objKeys)=>{myArr.push(objKeys,obj[objKeys])}); 



console.log(myArr);
/* [ 'a', 34, 'b', 'hello', 'myCoolMethod', [Function: myCoolMethod] ]
 */