/**
 * Original Version + Artist :       
 * https://codepen.io/rachelnabors/pen/bpAJH
 * 
 */

$( document ).ready(function() {

// Change cat's animation form walking to sitting on completion of bed movement
var transitionPrefixes = 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd';
	$('.cat-bed').one(transitionPrefixes, function(){
    $('.lazy-cat').removeClass('walking');
		$('.lazy-cat').addClass('sitting');		
  });
});