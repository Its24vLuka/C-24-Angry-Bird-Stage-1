class Pig{
    constructor(x,y){
        var options ={
            restitiuion: 0.8,
            friction: 1.0
        }
        this.body = Bodies.rectangle(x,y,50,50, options);
        World.add(world,this.body);
        console.log(this.body);
        this.w = 50;
        this.h =50;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        rectMode(CENTER)
        rect(0,0, this.w, this.h);
        pop();
    }
}