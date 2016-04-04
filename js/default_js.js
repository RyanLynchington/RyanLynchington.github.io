$(document).ready(function() {
	"use strict";
    $("a[rel^='prettyPhoto']").prettyPhoto();
	
	//show all categories
	$('#all').click(function() {
		$('.video').show();
		$('.photos').show();
		$('.animation').show();
		$('.sound').show();
		$('.graphics').show();
		$('.apps').show();
		$('.games').show();
	});
	
	//show sound designs only
	$('#sound_design_filter').click(function() {
		$('.video').hide();
		$('.photos').hide();
		$('.animation').hide();
		$('.graphics').hide();
		$('.apps').hide();
		$('.games').hide();
	});
	
		//show video only
	$('#video_filter').click(function() {
		$('.sound').hide();
		$('.photos').hide();
		$('.animation').hide();
		$('.graphics').hide();
		$('.apps').hide();
		$('.games').hide();
	});
	
		//show animation only
	$('#animation_filter').click(function() {
		$('.sound').hide();
		$('.photos').hide();
		$('.video').hide();
		$('.graphics').hide();
		$('.apps').hide();
		$('.games').hide();
	});
	
		//show apps only
	$('#apps_filter').click(function() {
		$('.sound').hide();
		$('.photos').hide();
		$('.video').hide();
		$('.graphics').hide();
		$('.animation').hide();
		$('.games').hide();
	});
	
		//show games only
	$('#games_filter').click(function() {
		$('.sound').hide();
		$('.photos').hide();
		$('.video').hide();
		$('.graphics').hide();
		$('.animation').hide();
		$('.apps').hide();
	});
	
		//show graphics only
	$('#graphics_filter').click(function() {
		$('.sound').hide();
		$('.photos').hide();
		$('.video').hide();
		$('.games').hide();
		$('.animation').hide();
		$('.games').hide();
	});
	
		//show graphics only
	$('#photos_filter').click(function() {
		$('.sound').hide();
		$('.graphics').hide();
		$('.video').hide();
		$('.games').hide();
		$('.animation').hide();
		$('.games').hide();
	});
});