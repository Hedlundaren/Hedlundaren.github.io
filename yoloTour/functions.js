
function drawRoute() {

	var stepsizeoriginal = 0.1;
	var stepsize = stepsizeoriginal;
	var stepsize2 = stepsizeoriginal;

	var theta = 1.5;
	var phi = 0.9;

	drawLine(theta,phi,theta+stepsize/2,phi+stepsize2/2,theta+stepsize,phi+stepsize2);
	for(i = 0; i < 1000; i++) 
	{

		stepsize = (Math.random()*2-1)*stepsizeoriginal;	
		stepsize2 = (Math.random()*2-1)*stepsizeoriginal;

		drawLine(theta,phi,theta+stepsize/2,phi+stepsize2/2,theta+stepsize,phi+stepsize2);
		
		theta+=stepsize;
		phi += stepsize2;
	}

}

function drawLine(theta, phi, theta2, phi2, theta3, phi3) {
	var material = new THREE.LineBasicMaterial({
	color: 0xff0000, linewidth: 10
	});

	var radius = 5.1;
	var x1 = radius*Math.sin(theta)*Math.cos(phi);
	var y1 = radius*Math.sin(theta)*Math.sin(phi);
	var z1 = radius*Math.cos(theta);

	var x2 = radius*Math.sin(theta2)*Math.cos(phi2);
	var y2 = radius*Math.sin(theta2)*Math.sin(phi2);
	var z2 = radius*Math.cos(theta2);

	var x3 = radius*Math.sin(theta3)*Math.cos(phi3);
	var y3 = radius*Math.sin(theta3)*Math.sin(phi3);
	var z3 = radius*Math.cos(theta3);

	var geometry = new THREE.Geometry();

	geometry.vertices.push(
			new THREE.Vector3( x1, y1, z1 ),
			new THREE.Vector3( x2, y2, z2 ),
			new THREE.Vector3( x3, y3, z3 )
	);


	var line = new THREE.Line( geometry, material );
	sunSphere.add( line );

}


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
		color  = parameters[i][0];
		sprite = parameters[i][1];
		size   = parameters[i][2];

		materials[i] = new THREE.PointCloudMaterial( { size: size, map: sprite, blending: THREE.AdditiveBlending, 
			depthTest: true, transparent : true, alphaTest: 0.015, opacity: 0.25, fog: 0.8} );

		materials[i].color.setHSL( color[0], color[1], color[2] );

		particles = new THREE.PointCloud( geometry, materials[i] );

		particles.rotation.x = Math.random() * 6;
		particles.rotation.y = Math.random() * 6;
		particles.rotation.z = Math.random() * 6;
		
		stars.push(particles);


	}

	for (var i = 0; i < stars.length; ++i){sceneGraph.add(stars[i]);}
}


function loadClouds(){
	
	cloudGroup =new THREE.Object3D;
	geometry = new THREE.Geometry();
	var sunRadius = 5.3;
	sprite1 = THREE.ImageUtils.loadTexture( "textures/sprites/cloud1.png", null);
	sprite2 = THREE.ImageUtils.loadTexture( "textures/sprites/cloud1.png", null);
	sprite3 = THREE.ImageUtils.loadTexture( "textures/sprites/cloud1.png", null);
	sprite4 = THREE.ImageUtils.loadTexture( "textures/sprites/cloud1.png", null);
	sprite5 = THREE.ImageUtils.loadTexture( "textures/sprites/cloud1.png", null);
	
	for ( i = 0; i < 30; i ++ ) {

		var vertex = new THREE.Vector3();
		var xTrans = (Math.random() -0.5)*2*sunRadius;
		 			
		var yMax = Math.sqrt(sunRadius*sunRadius-xTrans*xTrans);

		var yTrans = (Math.random() -0.5)*2*yMax;
	

		var zTrans;

		if(Math.random() < 0.5)
		{
			zTrans = Math.sqrt(sunRadius*sunRadius - xTrans*xTrans - yTrans*yTrans);
		}
		else
			zTrans = -Math.sqrt(sunRadius*sunRadius - xTrans*xTrans - yTrans*yTrans);
		

		vertex.x = Math.random()* 2000 - 1000;
		vertex.y = Math.random() * 2000 - 1000;
		vertex.z = Math.random() * 2000 - 1000;

		vertex.x = xTrans;
		vertex.y = yTrans;
		vertex.z = zTrans;

		//if(Math.abs(vertex.x) > 1000 || Math.abs(vertex.y) > 1000 || Math.abs(vertex.z) > 1000) {
			geometry.vertices.push( vertex );
		//}
	}

	parameters = [ [ [0.0, 0.0, 0.0], sprite1, 1.5 ],
					 [ [0.0, 0.0, 0.0], sprite2, 1 ],
					 [ [0.0, 0.0, 0.0], sprite3, 1 ],
					 [ [0.0, 0.0, 0.0], sprite4, 1 ],
					 [ [0.0, 0.0, 0.0], sprite5, 1 ]];
					 		 
	var particles = [];
	
	for ( i = 0; i < 5; ++i ) {	
		color  = parameters[i][0];
		sprite = parameters[i][1];
		size   = parameters[i][2];

		materials[i] = new THREE.PointCloudMaterial( { size: size, map: sprite, blending: THREE.AdditiveAlphaBlending, 
			depthTest: true, transparent : true, alphaTest:0.1, opacity: 0.7, fog: 0.08} );

		//materials[i].color.setHSL( color[0], color[1], color[2] );

		particles = new THREE.PointCloud( geometry, materials[i] );

		particles.rotation.x = Math.random() * 6;
		particles.rotation.y = Math.random() * 6;
		particles.rotation.z = Math.random() * 6;
		
		clouds.push(particles);


	}

	for (var i = 0; i < clouds.length; ++i){cloudGroup.add(clouds[i]);}
			sceneGraph.add(cloudGroup);
}

function loadModels(){
	///OBJ
			onProgress = function ( xhr ) {
				if ( xhr.lengthComputable ) {
					var percentComplete = xhr.loaded / xhr.total * 100;
					console.log( Math.round(percentComplete, 2) + '% downloaded' );
				}
			};
			onError = function ( xhr ) {
				console.log("build house error " + xhr);
			};
			THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );

			// Loader
			var loader2 = new THREE.OBJMTLLoader();


			var windmill = new THREE.Object3D;
			scene.add(windmill);
					//************* OBJ ***********************

			loader2.load( "obj/bus.obj", "obj/bus.mtl", function(object){ 
				

				object.scale.set(0.2, 0.2, 0.2);
				busGroup.add(daBus);
				daBus.add(object);
				daBus.position.x = 10;
				object.rotation.y -= Math.PI/2;
				
			}, onProgress, onError);


			var loader = new THREE.JSONLoader();
			//************* JSON ***********************

			var yoloText =new THREE.Object3D;

			loader.load("obj/yolotour.js", 

				function(geometry) {

					var objectMaterial = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture("textures/earth.jpg"), transparent: true, opacity: 0.5 });

					objectMaterial.side = THREE.DoubleSide;
					object = new THREE.Mesh(geometry, objectMaterial);
					object.rotation.z = -0.07;
					object.translateY(5.5);
					sceneGraph.add(object);

			});

}

function loadBasics(){

			


			var A_light = new THREE.AmbientLight( 0xdddddd ); // soft white light
			sceneGraph.add( A_light );

			sunGroup =new THREE.Object3D;
			//***********************************
			var sunGeometry = new THREE.SphereGeometry( 5, 42, 42 );

			var sunMaterial = new THREE.MeshBasicMaterial({wireframe: false, color: 0xffffaa});
			sunMaterial.map = THREE.ImageUtils.loadTexture('textures/earth2.jpg');
			sunSphere = new THREE.Mesh( sunGeometry, sunMaterial );

			sunGroup.add( sunSphere);
			scene.add(sunGroup);


			


			//ADD BUS
			busGroup =new THREE.Object3D;
			daBus =new THREE.Object3D;
			var busGeometry = new THREE.SphereGeometry( 1, 32, 32 );

			var busMaterial = new THREE.MeshPhongMaterial({wireframe: false, color: 0xffffaa});
			busMaterial.map = THREE.ImageUtils.loadTexture('textures/rainbow.png');
			busSphere = new THREE.Mesh( busGeometry, busMaterial );
			busSphere.position.x = 10;
			//busGroup.add( busSphere);
			sceneGraph.add(busGroup);
	

			var pathGeometry = new THREE.TorusGeometry( 10, 0.1, 10, 100 );
			var pathMaterial = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture("textures/rainbow.png"), transparent: true, opacity: 0.3 });
			path = new THREE.Mesh( pathGeometry, pathMaterial );

			path.rotation.x = Math.PI/2; 
			

			//sceneGraph.add(path);
}

