class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 1
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    fly(){

     this.rope.bodyA=null;
    }
    attach(body){
		this.rope.bodyA=body;
	}
    display(){
       // var pos =this.body.position;
      
        if(this.rope.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
           // translate(this.body.position.x, this.body.position.y);
            strokeWeight(4);
            stroke("blue");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
}