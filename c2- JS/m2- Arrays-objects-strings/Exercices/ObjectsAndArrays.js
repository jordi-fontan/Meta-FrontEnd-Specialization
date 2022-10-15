
}



console.log(typeof(hall))
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







for(c in boat) { 
   
   console.log(c, typeof(c));
