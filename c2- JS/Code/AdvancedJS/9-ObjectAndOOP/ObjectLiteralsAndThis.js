var literalCircle = {
    radius:20,
    getArea: function(){
        console.log(this);
        return Math.PI*Math.pow(this.radius,2);
    }
};
console.log(literalCircle.getArea());
