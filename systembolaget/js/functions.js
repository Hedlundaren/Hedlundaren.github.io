function norm(vec){ //returns normalized vector

	//console.log(vec);
	var x;
	var y;

	x = vec[0]/math.norm(math.matrix([vec[0],vec[1]]),2);
	y = vec[1]/math.norm(math.matrix([vec[0],vec[1]]),2);
	

	return [x,y];
}

function createDrops(){
	for(var i = 0; i < 100; i++){

		sprite = new PIXI.Sprite(texture);
		sprite.anchor.x = 0.5;
		sprite.anchor.y = 0.5;
		sprite.scale.x = 0.05;
		sprite.scale.y = 0.05;
		sprite.position.x = Math.random()*width;
		sprite.position.y = Math.random()*height;
		sprite.alpha = i/100;

		if(sprite.position.x < width/2)
			sprite.position.x+=2*radius;
		else
			sprite.position.x-=2*radius;

		if(sprite.position.y < height/2)
			sprite.position.y+=2*radius;
		else
			sprite.position.y-=2*radius;


		/*
		//Add direction indicator
		graphics.beginFill(0xFFFFF0);
		 
		graphics.moveTo(0,0);
		graphics.lineTo(1,0);
		graphics.lineTo(501, 100);
		graphics.lineTo(50, 100);

		graphics.endFill();
		sprite.addChild(graphics);
		*/

		drip = {
		  'sprite' : sprite,
		  'posX' : 0,
		  'posY' : 0,
		  'speed' : speed,
		  'direction' : [Math.random()*2-1,Math.random()*2-1],
		  'COM_direction' : [0,0],
		  'COM_distance' : 0,
		  'direction_indicator' : 0,
		  'nearest_distance' : 1000,
		  'nearest_direction' : [0,0],
		  'in_collision' : false,
		  'nearest' : drip

		}

		drops.push(drip);
		stage.addChild(sprite);

	}
}