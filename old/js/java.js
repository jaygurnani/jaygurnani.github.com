// JavaScript Document

$(document).ready(function() {
	$('#mainImage').cycle('fade');	
	
	/*Project Page*/
	
	$('#scrollLicense').click(function (){
		$('#projectPage').scrollTo('0%',1000);
	 });
	 
	$('#scrollPython').click(function (){
		$('#projectPage').scrollTo('30%',1000);
	});
	
     $('#scrollConnect').click(function (){
		$('#projectPage').scrollTo('40%',1000);
	 });
	 
	 $('#scrollIphone').click(function (){
		$('#projectPage').scrollTo('70%',1000);
	 });
	
	/*DJ Page*/
	
	$('#scrollTop40').click(function (){
		$('#djPage').scrollTo('0%',1000);
	 });
	 
	 $('#scrollBollywood').click(function (){
		$('#djPage').scrollTo('35%',1000);
	 });
	 
	 $('#scrollMashups').click(function (){
		$('#djPage').scrollTo('62%',1000);
	 });
	  
	 /*About Page*/
	 $('#scrollAboutme').click(function (){
		$('#aboutPage').scrollTo('0%',1000);
	 });
	 
	 $('#scrollEmail').click(function (){
		$('#aboutPage').scrollTo('40%',1000);
	 });
	 
	 $('#scrollLinkedin').click(function (){
		$('#aboutPage').scrollTo('55%',1000);
	 });
	 
	 $('#scrollGithub').click(function (){
		$('#aboutPage').scrollTo('70%',1000);
	 });
	 
	 /*Resume Page*/
	 
	
	
	 
	 
});

/* 
	Full window width content slider by Oskar Engdahl
	http://www.musca.se/full-window-width-jquery-tools-content-slider-demo/
	This code is licensed under GPL and free to use. 
	http://www.gnu.org/licenses/gpl.html
*/

$(function() {
	// Adds a class to the html code so we can target browsers without JS.
	$('html').addClass('JS');
	// Sets the slides width on page load
	var i = $(window).width();
	if (i > 959){ $('#items > div').css({ width: i }); }
		// Scrollable and navigator plugin settings.
	$("#slider").scrollable({ easing: 'easeOutQuad', speed: 900, circular: true }).navigator({ navi: '#navigation' });
	
	// Window resize code
	window.api = $("#slider").data("scrollable");
	$(window).resize(function() {
		var a = 1 + window.api.getIndex();
		var w = $(window).width();
		if (w > 959) {
			var l = a * w
			$('#items').css({ left: + - +l });
			$('#items > div').css({ width: w });
		} else {
			$('#items > div').css({ width: 960 });
		}
	});
});
