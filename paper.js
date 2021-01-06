class Paper{
    constructor(x, y, radius ) {
        var options = {
           isStatic:false,
           restitution: 0.3
        
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("red")
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius)
        rotate(angle);
        pop();
      }
}