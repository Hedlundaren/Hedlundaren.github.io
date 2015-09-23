<?php 
include "header.php";
?>




<div id="distancer"></div>


<div id="portfolio">
	
	<div id="threeD">
	<p class="subject_title">Animation & Modelling</p>
		<div class="subject">
			<img class ="portfolio_boxes" src="images/box1.png"/>
			<img class ="portfolio_boxes" src="images/box2.png"/>
			<img class ="portfolio_boxes" src="images/box3.png"/>
			<img class ="portfolio_boxes" src="images/box4.png"/>
		</div>
	</div>
	
	<div id="programming">
	<p class="subject_title">Programming</p>
		<div class="subject">
			<img class ="portfolio_boxes" src="images/box1.png"/>
			<img class ="portfolio_boxes" src="images/box2.png"/>
			<img class ="portfolio_boxes" src="images/box3.png"/>
			<img class ="portfolio_boxes" src="images/box4.png"/>
		</div>
	</div>

	<div id="web">
	<p class="subject_title">Web</p>
		<div class="subject">
			<img class ="portfolio_boxes" src="images/box1.png"/>
			<img class ="portfolio_boxes" src="images/box2.png"/>
			<img class ="portfolio_boxes" src="images/box3.png"/>
			<img class ="portfolio_boxes" src="images/box4.png"/>
		</div>
	</div>

</div>

<div id="CV">
	
	<div id="text_holder"><p class="ans">CV</p></div>
	<div id="canvas1"><canvas id="glcanvas" name="glcanvas" width="500" height="500">
    Your browser doesn't appear to support the HTML5 <code>&lt;canvas&gt;</code> element.
  </canvas></div>

</div>

<div id="kontakt">
	<div id="canvas2"></div>
	<div id="info_holder"><p class="ans">Kontakt</p></div>
	
</div>



<script>



//FADE
$(document).ready(function(){
$(".center").hover(
function() {
$(this).stop().animate({"opacity": "1"}, "medium");
	$("html, body").animate({ scrollTop: 0 }, "slow");
  return false;

},
function() {
$(this).stop().animate({"opacity": "0.6"}, "medium");
});

$(".portfolio_boxes").hover(
function() {
$(this).stop().animate({"opacity": "0.9"}, "fast");

},
function() {
$(this).stop().animate({"opacity": "0.7"}, "fast");
});

$("#name_title").hover(
function() {
$(this).stop().animate({"opacity": "1.0"}, "medium");

},
function() {
$(this).stop().animate({"opacity": "0.8"}, "medium");
});

$(function() {
  $('#name_title').animate({ 

    height: "100px",
    opacity: "1",
    visibility: "true" 

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




});






//RANDOM FUNKTIONER

$("#portfolio").hide();
$("#kontakt").hide();
$("#CV").hide();

var speed1 = 'slow';
var speed2 = 'medium';
var speed3 = 'fast';
//CV
$( "#btn1" ).click(function() {
	
	$('#portfolio').hide();
	$('#kontakt').hide();

	$( '#CV').css( "visibility", "visible" );
 	$('#CV').fadeToggle(speed1);
	//$( "#background" ).replaceWith( "<img id='background' src='images/pic1.jpg'/>" );
});

//Portfolio
$( "#btn2" ).click(function() {
	$('#CV').hide(speed1);
	$('#kontakt').hide(speed1);
	$( '#portfolio').css( "visibility", "visible" );
	$('#portfolio').fadeToggle(speed1);

	//$( "#txt1" ).replaceWith( "<div id='txt1' class='ans'>" + "" + "</div>" );
});

//Konstakt
$( "#btn3" ).click(function() {
	$('#portfolio').hide();
	$('#CV').hide();
	
	$( '#kontakt').css( "visibility", "visible" );
	$('#kontakt').fadeToggle(speed1);

});


</script>




<?php 
include "footer.php";
