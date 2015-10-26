function loadStars(){
	geometry = new THREE.Geometry();
	
	sprite1 = THREE.ImageUtils.loadTexture( "textures/sprites/star12.png", null);
	sprite2 = THREE.ImageUtils.loadTexture( "textures/sprites/star12.png", null);
	sprite3 = THREE.ImageUtils.loadTexture( "textures/sprites/star13.png", null);
	sprite4 = THREE.ImageUtils.loadTexture( "textures/sprites/star14.png", null);
	sprite5 = THREE.ImageUtils.loadTexture( "textures/sprites/star15.png", null);
	
	for ( i = 0; i < 20000; i ++ ) {

		var vertex = new THREE.Vector3();
		vertex.x = Math.random()* 20000 - 10000;
		vertex.y = Math.random() * 20000 - 10000;
		vertex.z = Math.random() * 20000 - 10000;

		if(Math.abs(vertex.x) > 1000 || Math.abs(vertex.y) > 1000 || Math.abs(vertex.z) > 1000) {
			geometry.vertices.push( vertex );
		}
	}

	parameters = [ [ [0.0, 0.0, 0.0], sprite1, 90 ],
					 [ [0.0, 0.0, 0.0], sprite2, 80 ],
					 [ [0.0, 0.0, 0.0], sprite3, 100 ],
					 [ [0.0, 0.0, 0.0], sprite4, 70 ],
					 [ [0.0, 0.0, 0.0], sprite5, 60 ]];
					 		 
	var particles = [];
	
	for ( i = 0; i < 5; ++i ) {	
		//color  = parameters[i][0];
		sprite = parameters[i][1];
		size   = parameters[i][2];

		materials[i] = new THREE.SpriteMaterial( { size: size, map: sprite, blending: THREE.AdditiveBlending, depthTest: true, transparent : true, alphaTest: 0.015, opacity: 0.85, fog: 0.8} );

		//materials[i].color.setHSL( color[0], color[1], color[2] );

		particles = new THREE.Sprite( geometry, materials[i] );

		particles.rotation.x = Math.random() * 6;
		particles.rotation.y = Math.random() * 6;
		particles.rotation.z = Math.random() * 6;
		
		stars.push(particles);


	}
}