class Paper 
{
	constructor(x,y,r)
	{
     var options = {
     restitution: 0.3,
     friction: 0,
     density: 1.2
     }

		this.x=x;
		this.y=y;
        this.r=r;
		
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y,(this.r -20)/2,options);
		
		
		World.add(world, this.body)

	}
	display()
	{
			var paperPosition = this.body.position;

			push()
			translate(paperPosition.x, paperPosition.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("purple")
            imageMode(CENTER);
            image(this.image,0,0,this.r,this.r)
			pop()
 }
  }