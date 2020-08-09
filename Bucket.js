class Bucket {
  constructor(x,y,width,height){
  //  super(x,y,width,height);
  var options = {
    isStatic:true
      
      
      
  }
  this.body = Bodies.rectangle(x, y, width, height,options );
  World.add(world,this.body);
    this.image=loadImage("dustbingreen.png")
    this.w=width
    this.h=height
    
  }

  display() {
    var angle = this.body.angle
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
   // super.display();
    imageMode(CENTER)
    image(this.image,0,0,180,200)
    pop();
  }
}