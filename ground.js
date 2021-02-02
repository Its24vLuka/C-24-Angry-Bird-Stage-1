class Ground{
    // All properties and functions of the object are written here

    // Constructor () is the default method to give properties
    // 'this' keyword refers to every object created by this class
    constructor(x,y,w,h){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        //w, h are local variables, to acces them in display() , we are assigning them as properties using "this "
        this.w = w;
        this.h= h;
    }
    
    // Actions to be performed by the objects are written as functions
    display(){
        strokeWeight(4);
        stroke("green");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y, this.w,this.h);

    }
}