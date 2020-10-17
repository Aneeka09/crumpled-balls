class Ball{
    constructor(x,y){
        var options={
            isStatic:false
        }
        this.body=Bodies.circle(x,y,this.d/2,options)
        World.add(world,this.Body);
    }
    display(){
        var pos=this.body.position;
        ellipse(0,0,this.d,this.d);
    }

}