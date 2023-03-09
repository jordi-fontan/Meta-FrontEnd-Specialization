const bicycle={
    bell: function() {
        console.log('Watch Out ...Ring!RIng!');
    }
}
const door={
    bell: function() {
        console.log('Ding Dong');
    }
}
const bird={
    tweet: function(){
        console.log('Pio pio');
    }
}

let objArray= new Array();
objArray.push(bicycle);
objArray.push(door);
objArray.push(Object.create(bird));
//objArray.push(new String('Not a bellable'));

try {
    
    for (let obj of objArray )  {
       // Need to check for type to avoid a TypeError
       // due to javascript not typeCheck Nature
        if(obj.bell!=null ) obj.bell();
        else {
            console.log(Object.getPrototypeOf(obj));
           throw new Error();
    
        }
    }
} catch (error) {
    console.log('This object is not bellable');
}
