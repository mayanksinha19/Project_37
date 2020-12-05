class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        //this.width=this.width;
        //this.height=this.height;
        World.add(world,this.body);

    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS); 
      fill("green");
      strokeWeight(5);
      ellipse(0, 0, this.radius, this.radius);
      camera.position.x = paper.body.x;
      camera.position.y=paper.body.y;
      pop();
    }
}