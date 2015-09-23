<?php print ("<!DOCTYPE html>");?>
<html>
<head>
	<meta charset="iso-8859-1">
	<title>Portfolio - Simon Hedlund</title>
	<link rel="shortcut icon" href="icon.ico">
	<link rel="stylesheet" type="text/css" href="style_index.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="js/three.js"></script>
<script src="js/TrackballControls.js"></script>
<script src="js/Detector.js"></script>


</head>
<body>

<script>
/*
			var scene = new THREE.Scene();
			scene.fog = new THREE.FogExp2( 0x000000, 0.002 );
			var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );
			camera.position.z = 30;
			scene.add(camera);
			
			var renderer = new THREE.WebGLRenderer({ alpha: true, antialiasing: true });
			renderer.setSize( window.innerWidth, window.innerHeight );
			//container = document.createElement( 'div' );
			//document.body.appendChild( container );
			//document.body.appendChild(renderer.domElement);
			//document.getElementById('glcanvas').appendChild(renderer.domElement);

			//Skapar en grupp som ska innehålla hela scengrafen
			sceneGraph = new THREE.Object3D;
		
			var A_light = new THREE.AmbientLight( 0x404040 ); // soft white light
			sceneGraph.add( A_light );
			
			
			var light = new THREE.DirectionalLight( 0xffffff,0.7 );
			light.position.set( 20, 20, 20 ).normalize();
			sceneGraph.add(light);

			
			sunGroup =new THREE.Object3D;
			//***********************************
			var sunGeometry = new THREE.SphereGeometry( 5, 50, 50 );
			var sunMaterial = new THREE.MeshBasicMaterial({wireframe: false, color: 0xffffaa});
			
			var sunSphere = new THREE.Mesh( sunGeometry, sunMaterial );

			scene.add( sunSphere);

			galaxyGroup = new THREE.Object3D;
			//**********************************
			var galaxyGeometry = new THREE.SphereGeometry( 300, 32, 32 );
			var galaxyMaterial = new THREE.MeshPhongMaterial();
			
			galaxyMaterial.map    = THREE.ImageUtils.loadTexture('textures/space.png');
			//galaxyMaterial.specular  = new THREE.Color('grey');
			galaxyMaterial.side = THREE.DoubleSide;
			
			var galaxySphere = new THREE.Mesh( galaxyGeometry, galaxyMaterial );
		
			galaxyGroup.add( galaxySphere);
			//*********************************

			
			
			sceneGraph.add(galaxyGroup);
			//Lägger till grupper till scengraf
			galaxyGroup.add(sunGroup);
			
			
			//Lägger till scengraf till scen
			scene.add(sceneGraph);
			
			sceneGraph.rotation.x += 0.5;
			
			
			controls = new THREE.TrackballControls( camera );
			controls.zoomSpeed = 0.5;
			controls.panSpeed = 0;
			controls.rotateSpeed = 0.5;
			

			//Renderingsloop
			var render = function () {
				requestAnimationFrame( render );
				controls.update();
				renderer.render(scene, camera);
			};

			render();
			*/
		</script>

<img src="images/background.jpg" alt="background" id="background">
	
	
<header>

<div id="name_title"><h1><a href="">Simon Hedlund</a></h1></div>	
<a href=""><img id="profil_pic" src="images/profil.png"/></a>
	<div id="btn_holder">
<button id="btn1" type="button" class="center" >CV</button>
<button id="btn2" type="button" class="center">Portfolio</button>
<button id="btn3" type="button" class="center">Kontakt</button>
</div>


</header>

