
var frameCounter = 0,
percentLoaded = 1;
window.onload = function() {
	showLoadingSpinner();

	var container = document.getElementById( 'container' ),
		containerWidth, containerHeight,
		renderer,
		scene,
		camera,
		cubes,
		geom,
		range = 60,
		grayness,
		controls,
		appLoaded = false;

	

	containerWidth = container.clientWidth;
	containerHeight = container.clientHeight;

	// Set up renderer, scene and camera
	renderer = new THREE.CanvasRenderer();
	renderer.setSize( containerWidth, containerHeight );
	container.appendChild( renderer.domElement );

	renderer.setClearColorHex( 0xccccbb, 0.0 );

	scene = new THREE.Scene();
	sceneGraph = new THREE.Object3D;

	camera = new THREE.PerspectiveCamera( 45, containerWidth / containerHeight, 1, 10000 );
	camera.position.set( 0, 0, 200 );
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

	// Add some cubes to the scene
	cubes = new THREE.Object3D();
	sceneGraph.add( cubes );
	geom = new THREE.SphereGeometry( 5, 3,3 );
	grayness = 0.3;

	for(var i = 0; i < 50; i++ ) {
		
		grayness = Math.random() * 0.5 + 0.25,
		mat = new THREE.MeshBasicMaterial(),
		//mat = new THREE.MeshPhongMaterial( {overdraw: true}),
		cube = new THREE.Mesh( geom, mat );
		//var size = Math.random()+0.5;
		//cube.scale.set(size,size,size);
		mat.color.setRGB( grayness*0.2, grayness*0.5, grayness*0.5 );
		
		cube.position.set( 0,0,0);
		cube.position.set( range * (0.5 - Math.random()), range * (0.5 - Math.random()), range * (0.5 - Math.random()) );
		cube.rotation.set( Math.random(), Math.random(), Math.random() ).multiplyScalar( 2 * Math.PI );
		cubes.add( cube );
		percentLoaded += 2;
	}
	controls = new THREE.TrackballControls( camera, container );
	controls.zoomSpeed = 0.1;
	controls.panSpeed = 0;
	// var orbLight = new THREE.PointLight(0xffffff);
	// orbLight.position.set(0,100,0);
	// sceneGraph.add(orbLight);

	scene.add(sceneGraph);
	projector = new THREE.Projector();
	mouseVector = new THREE.Vector3();

	window.addEventListener( 'resize', onWindowResize, false );

	animate();

	function onWindowResize( e ) {
		containerWidth = container.clientWidth;
		containerHeight = container.clientHeight;
		renderer.setSize( containerWidth, containerHeight );
		camera.aspect = containerWidth / containerHeight;
		camera.updateProjectionMatrix();
	}

	function animate() {
	
		 if(!appLoaded) {
			frameCounter++;	
			checkIfDoneLoading(true);
		}

		sceneGraph.rotation.y += 0.0009;
		requestAnimationFrame( animate );
		controls.update();
		renderer.render( scene, camera );
	}
}
