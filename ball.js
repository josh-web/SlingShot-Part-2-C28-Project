class Ball {
  constructor(x, y,radius) {
    var options = {
        'restitution':0.1,
        'friction':0.1,
        'density':0.1
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;

    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill("yellow");
    ellipse(0, 0,this.radius);
    pop();
  }
}
