// A simple Object

var calculator = {
    price: 100,
    taxRate: 1.2,
    calc: function(){
        let final=this.price*this.taxRate;
        console.log( 'The price is ' + final)
    }

}
calculator.calc();

// The same with just functions
// Using arrow operator

let price=110;
let taxRate=1.5;
const calculatorFunt = (p,t) => {
    let final=p*t;
    console.log('The price2 is ' +final);
    return final;
}
calculatorFunt(price,taxRate);

class Car {
    constructor(color,speed){
        this.color=color;
        this.speed=speed;
    }
    turboOn(){
        console.log("Run Run..");
    } 
}

let car1=new Car();
car1.color='green';
let car2=new Car('blue',1.3);
let car3=Object.create(Car)
car3.color='Orage';
car3.speed=1.78;

console.log(car1);console.log(typeof(car1));
console.log(car2);console.log(typeof(car2));
console.log(car3);console.log(typeof(car3));

