var literalCircle = { // New Object()
    radius:20,
    getArea: function(){
        console.log(this);
        return Math.PI*Math.pow(this.radius,2);
    }
};
console.log(literalCircle.getArea());

delete literalCircle;
//let's add ain inner funtion and work with self


 literalCircle = { // New Object()
    radius:20,
    getArea: function(){
        this.radius=40; // wont work inEC5
        console.log(this);
        return Math.PI*Math.pow(this.radius,2);
    }
};
console.log(literalCircle.getArea());

delete literalCircle;
//let's add ain inner funtion and work with self


 literalCircle = { // New Object()
    
    radius:20,
    getArea: function(){
       var self=this;
        self.radius=1000; 
        console.log(this);
        return Math.PI*Math.pow(this.radius,2);
    }
};
console.log(literalCircle.getArea());