window.onload = function() {
	
	var container = document.getElementById( 'container' ),
		containerWidth, containerHeight,
		renderer,
		scene,
		camera,
		cubes,
		geom,
		range = 60,
		mouseVector,
		axes,
		controls, 
		grayness;

	containerWidth = container.clientWidth;
	containerHeight = container.clientHeight;

	// Set up renderer, scene and camera
	renderer = new THREE.CanvasRenderer();
	renderer.setSize( containerWidth, containerHeight );
	container.appendChild( renderer.domElement );

	renderer.setClearColorHex( 0xccccbb, 1.0 );

	scene = new THREE.Scene();
	sceneGraph = new THREE.Object3D;

	camera = new THREE.PerspectiveCamera( 45, containerWidth / containerHeight, 1, 10000 );
	camera.position.set( 0, 0, 200 );
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

	// Add some cubes to the scene
	geom = new THREE.CubeGeometry( 5, 5, 5 );
	cubes = new THREE.Object3D();
	sceneGraph.add( cubes );
	geom = new THREE.SphereGeometry( 5, 8, 8 );
	grayness = 0.3;

	for(var i = 0; i < 50; i++ ) {
		
		grayness = Math.random() * 0.5 + 0.25,
		mat = new THREE.MeshBasicMaterial(),
		cube = new THREE.Mesh( geom, mat );
		mat.color.setRGB( grayness, grayness, grayness );
		cube.position.set( range * (0.5 - Math.random()), range * (0.5 - Math.random()), range * (0.5 - Math.random()) );
		cube.rotation.set( Math.random(), Math.random(), Math.random() ).multiplyScalar( 2 * Math.PI );
		cube.grayness = grayness;
		cubes.add( cube );
	}


	//**********************************
	galaxyGroup = new THREE.Object3D;
	var galaxyGeometry = new THREE.SphereGeometry( 300, 50, 50 );
	var galaxyMaterial = new THREE.MeshPhongMaterial({  overdraw: true });
	galaxyMaterial.map    = THREE.ImageUtils.loadTexture('images/background2.jpg');
	galaxyMaterial.side = THREE.DoubleSide;
	galaxyMaterial.color.setRGB( grayness, grayness, grayness );
	var galaxySphere = new THREE.Mesh( galaxyGeometry, galaxyMaterial );
	galaxyGroup.add( galaxySphere);
	galaxyGroup.rotation.y = -Math.PI / 2;
	sceneGraph.add(galaxyGroup);


	scene.add(sceneGraph);
	projector = new THREE.Projector();
	mouseVector = new THREE.Vector3();

	// User interaction
	window.addEventListener( 'mousemove', onMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );

	controls = new THREE.TrackballControls( camera, container );
	controls.zoomSpeed = 0.1;
	controls.rotateSpeed = 0.5;
	controls.panSpeed = 0.0;

	// And go!
	animate();


	function onMouseMove( e ) {
		
		mouseVector.x = 2 * (e.clientX / containerWidth) - 1;
		mouseVector.y = 1 - 2 * ( e.clientY / containerHeight );

		var raycaster = projector.pickingRay( mouseVector.clone(), camera ),
			intersects = raycaster.intersectObjects( cubes.children );

		cubes.children.forEach(function( cube ) {
			cube.material.color.setRGB( cube.grayness, cube.grayness, cube.grayness );
		});

			
		for( var i = 0; i < intersects.length; i++ ) {
			var intersection = intersects[ i ],
				obj = intersection.object;

			obj.material.color.setRGB( 1.0 - i / intersects.length, 0, 0 );
		}

		
	}

	function onWindowResize( e ) {
		containerWidth = container.clientWidth;
		containerHeight = container.clientHeight;
		renderer.setSize( containerWidth, containerHeight );
		camera.aspect = containerWidth / containerHeight;
		camera.updateProjectionMatrix();
	}

	function animate() {
		sceneGraph.rotation.y += 0.0005;
		requestAnimationFrame( animate );
		controls.update();
		renderer.render( scene, camera );
	}


	// http://soledadpenades.com/articles/three-js-tutorials/drawing-the-coordinate-axes/



}
