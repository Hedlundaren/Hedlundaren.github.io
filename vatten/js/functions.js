

function createDrops(){
	
	var drip;
	var closeDrops = [];
	var velocity;
	var texture = PIXI.Texture.fromImage('images/blue_sprite.png');;
	var sprite;

	for(var i = 0; i < 80; i++){

		sprite = new PIXI.Sprite(texture);

		// Center anchor
		sprite.anchor.x = 0.5; 
		sprite.anchor.y = 0.5;

		// Scale
		sprite.scale.x = 0.06;
		sprite.scale.y = 0.06;

		// Randomize init position
		sprite.position.x = Math.random()*width;
		sprite.position.y = Math.random()*height;
		

		if(sprite.position.x < width/2)
			sprite.position.x+=2*radius;
		else
			sprite.position.x-=2*radius;

		if(sprite.position.y < height/2)
			sprite.position.y+=2*radius;
		else
			sprite.position.y-=2*radius;

		velocity = [Math.random()-0.5, Math.random()-0.5];

		// draw a triangle using lines
	/*	var line = new PIXI.Graphics();
				line.beginFill(0x00FF00);
				line.moveTo(0,0);
				line.lineTo(50, 100);
				line.lineTo(51, 100); 
				line.endFill();
				stage.addChild(line);*/

		drip = {
		  'sprite' : sprite,
		  'position' : [sprite.position.x,sprite.position.y],
		  'velocity' : velocity,
		  'pressure' : 1,
		  'density' : 1,
		  'closeDrops' : closeDrops,

		}

		drops.push(drip);
		stage.addChild(sprite);

	}
}

function norm(vec){ //returns normalized vector

	//console.log(vec);
	var x;
	var y;

	x = vec[0]/math.norm(math.matrix([vec[0],vec[1]]),2);
	y = vec[1]/math.norm(math.matrix([vec[0],vec[1]]),2);
	

	return [x,y];
}

function addVectors(v1, v2){

	return [v1[0] + v2[0], v1[1] + v2[1]];
}

function subtractVectors(v1, v2){

	return [v1[0] - v2[0], v1[1] - v2[1]];
}

function vecLength(vec){

	return Math.sqrt(Math.pow(vec[0],2) + Math.pow(vec[1],2));
}

function multiplyVec(vec, c){

	return [c*vec[0],c*vec[1]];
}