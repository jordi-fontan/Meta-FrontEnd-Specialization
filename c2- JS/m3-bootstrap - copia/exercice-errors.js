
function add2(a,b)
{
    try {
        if(typeof(a)!="number" || typeof(b)!="number") throw new Error();
        else console.log(a+b);


    } catch (error) {
     //console.log("Ewk",error);
     console.log('Argggggg?');
    }
}

add2(8,9);
add2('8',9);
console.log('Still runniing');