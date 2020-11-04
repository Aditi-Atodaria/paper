class Garden{
    constructor(posx,posy){
        this.height
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        strokeWeight(3);
        stroke("green");
        rect(0,0,this.width,this.height)  
        pop();
    }
    
}