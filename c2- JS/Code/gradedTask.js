// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy(arr) {
    for (var item of arr) {
      
        console.log(item);
        }
}
logDairy(dairy)

//Task 2

const animal = {

    canJump: true
    
    };
    
    const bird = Object.create(animal);
    
    bird.canFly = true;
    
    bird.hasFeathers = true;

function birdCan(obj){
    for (var key of Object.keys(obj)) {
   
        console.log(key,': ',obj[key]);
        }
}
birdCan(bird);

//Task 3

function animalCan(obj)
{
    for (var key in obj) {
   
        console.log(key,': ',obj[key]);
        }
}
animalCan(bird);