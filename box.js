class Box{
    constructor(x, y, width, height, angle) {
        var options = {
           isStatic:true
        
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        fill("red")
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        rotate(angle);
        pop();
      }
}