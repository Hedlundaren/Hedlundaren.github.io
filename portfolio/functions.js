function showLoadingSpinner() {
	var opts = {
	  lines: 50 // The number of lines to draw
	, length: 1 // The length of each line
	, width: 1 // The line thickness
	, radius: 100 // The radius of the inner circle
	, scale: 1.25 // Scales overall size of the spinner
	, corners: 1 // Corner roundness (0..1)
	, color: '#fff' // #rgb or #rrggbb or array of colors
	, opacity: 0.0 // Opacity of the lines
	, rotate: 0 // The rotation offset
	, direction: 1 // 1: clockwise, -1: counterclockwise
	, speed: 1.0 // Rounds per second
	, trail: 50 // Afterglow percentage
	, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
	, zIndex: 2e9 // The z-index (defaults to 2000000000)
	, className: 'spinner' // The CSS class to assign to the spinner
	, top: '51%' // Top position relative to parent
	, left: '50%' // Left position relative to parent
	, shadow: true // Whether to render a shadow
	, hwaccel: true // Whether to use hardware acceleration
	, position: 'absolute' // Element positioning
}

var target = document.getElementById('dim-screen');
spinner = new Spinner(opts).spin(target);

}

function checkIfDoneLoading(firstLoad) {
	// console.log("loading (" + calculateLoadedPercent() + "%). textures: " + loadedTextures + "/" + texturesToLoad 
		// + ", models: " + loadedModels + "/" + modelsToLoad);

	// First Time app is loading
	if (firstLoad) {
		$("#loading-text").text(calculateLoadedPercent(false) + "% loaded");

		if( percentLoaded > 100 || frameCounter >= 50) { //(frameCounter >= 20)
			//camera.position.z = 0;		//put camera in sun and allow for zoom out
			spinner.stop();		
			$("#dim-screen").fadeOut(500, "swing");
			appLoaded = true;



				//JQuery when app is done loading
				$(function() {
					$('#name_title').animate({ 

						visibility: "true",

						opacity: "1.0",
						left:"10px",



					}, 500, 'swing');
				});

				$(function() {
					$('#profil_pic').animate({ 

						opacity: "1",
						visibility: "true" 

					}, 200, 'swing');
				});

				$(function() {
					$('header').animate({ 

						opacity: "1",
						visibility: "true", 
						height: "110px"
					}, 500, 'swing');
				});

				$(function() {
					$('#distancer').animate({ 

						opacity: "1",
						visibility: "true", 
						height: "110px"
					}, 500, 'swing');
				});
			}
		}
	}

	function calculateLoadedPercent(justTextures) {
		var percentage = 0;
		var loaded = 0;
		var total = 0;


		return Math.round(percentage);
	}

