class Box1 {
  constructor(x, y, width, height) {
    var options = {
       
        restitution :0.4,
        friction :0.0,       
    }
    this.visibility = 225;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    
  }
 
  display(){
    console.log(this.body);
    if(this.body.speed <3){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("orange")
    rect(0,0,this.width, this.height);
    pop();
  }else{
    push();
    this.visibility = this.visibility -5;
    pop();
    
  }
}
}

