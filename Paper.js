class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.4,
          'friction':1,
          'density':20
      }
      this.image = loadImage("sprites/paper.png");
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
      imageMode(CENTER);
      image(this.image, 0, 0, 50, 50);
      //ellipseMode(RADIUS);
      //ellipse(0, 0, this.radius);;
      pop();
    }
  };