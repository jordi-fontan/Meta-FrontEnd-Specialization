
// array methods
var clothes=[];
clothes.push('shirt');
clothes.push('pants');
clothes.push('socks');
clothes.push('pullover');
clothes.push('skirt');
clothes.pop();
clothes.push('scarf');
console.log(clothes)

// objects
var favcar={
    color:'red'
};
favcar.convertible=true;
console.log(favcar);

var boat={
    hall: [1,2,3],
   length: 12
};



boat.height=23;
boat['width']=12;


// collection for

for(c in boat)    console.log(c, typeof(c));


// methods


var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()  