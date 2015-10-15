( function( $ ) {


jQuery(function ($) {
    // The dollar sign will equal jQuery in this scope

	//FADE
	$(document).ready(function(){
		$(".center").hover(

		function() {
			$(this).stop().animate({"opacity": "1"}, "medium");
				$("html, body").animate({ scrollTop: 0 }, "fast");
			  return false;
			},

			function() {
			$(this).stop().animate({"opacity": "0.6"}, "medium");
		});

		$("#menu_btn").hover(
			function() {
			$(this).stop().animate({"opacity": "1"}, "fast");
			},
			function() {
			$(this).stop().animate({"opacity": "0.6"}, "fast");
		});

		$(".portfolio_boxes").hover(
			function() {
			$(this).stop().animate({"opacity": "1"}, "fast");
			},
			function() {
			$(this).stop().animate({"opacity": "0.8"}, "fast");
		});

		$("#name_title").hover(
			function() {
			$(this).stop().animate({"opacity": "1.0"}, "medium");
			},
			function() {
			$(this).stop().animate({"opacity": "0.8"}, "medium");
		});

		$(".hover_box").hover(
			function() {
			$(this).stop().animate({"opacity": "1"}, 300);
			}, function() {
			$(this).stop().animate({"opacity": "0"}, 200);
			}, function() {
			$(".box_logo").animate({top: '-=100px'}, 2000);
			}, function() {
			$(".box_logo").animate({top: '+=100px'}, 2000);
		});

		$("#menu_btn").hover(
			function() {
			$( '#drop_menu').css( "visibility", "visible" );
			}, function() {
			$("#drop_menu").delay(10000).css( "visibility", "hidden" );
		});

		$("#drop_menu").hover(
			function() {
			$( '#drop_menu').css( "visibility", "visible" );
			}, function() {
			$("#drop_menu").delay(10000).css( "visibility", "hidden" );
		});



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


	});







//RANDOM FUNKTIONER

$("#portfolio").hide();
$("#kontakt").hide();
$("#CV").hide();

$("#btn1_line").hide();
$("#btn2_line").hide();
$("#btn3_line").hide();
$("#get_up").hide();
//$("footer").hide();


var speed1 = 'medium';
var speed2 = 'medium';
var speed3 = 'fast';

var portfolio_bool = false;
//CV
$( "#btn1" ).click(function() {
	cv_bool = true;

	$("#get_up").hide();
	$("#btn2_line").hide();
	$("#btn3_line").hide();
	$("#btn1_line").fadeToggle(speed1);
	
	$('#portfolio').hide();
	$('#kontakt').hide();
	$( 'footer').css( "background", "rgba(255, 255, 255, 0.10)" );
		
	portfolio_bool = false;
	$( '#CV').css( "visibility", "visible" );
 	$('#CV').fadeToggle(speed1);
	//$( "#background" ).replaceWith( "<img id='background' src='images/pic1.jpg'/>" );
});

//Portfolio
$( "#btn2" ).click(function() {
	$('#CV').hide(speed1);
	$('#kontakt').hide(speed1);

	$("#get_up").toggle();
	$("#btn1_line").hide();
	$("#btn3_line").hide();
	$("#btn2_line").fadeToggle(speed1);


	if(portfolio_bool){

		portfolio_bool = false;
	$( 'footer').css( "background", "rgba(255, 255, 255, 0.10)" );

	}else{
		portfolio_bool = true;
		$( 'footer').css( "background", "rgba(0, 0, 0, 0.90)" );

	}

	$( '#portfolio').css( "visibility", "visible" );
	$('#portfolio').fadeToggle(speed1);

	//$( "#txt1" ).replaceWith( "<div id='txt1' class='ans'>" + "" + "</div>" );
});

//Konstakt
$( "#btn3" ).click(function() {
	$('#portfolio').hide();
	$('#CV').hide();

	$("#get_up").hide();
	$("#btn1_line").hide();
	$("#btn2_line").hide();
	$("#btn3_line").fadeToggle(speed1);

	$( 'footer').css( "background", "rgba(255, 255, 255, 0.10)" );
	portfolio_bool = false;
	//$('#container').css( "visibility", "hidden" );
	$( '#kontakt').css( "visibility", "visible" );
	$('#kontakt').fadeToggle(speed1);

});


$( "#canvas1" ).click(function() {
	$('#CV').hide();
	$("#btn1_line").hide();
	$("#get_up").hide();
});

$( "#canvas2" ).click(function() {
	$('#kontakt').hide();
	$("#btn3_line").hide();
	$("#get_up").hide();
});

});
} )( jQuery );
