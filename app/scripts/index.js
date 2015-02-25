(function(){
	'use strict';

	var fb = new Firebase('https://tictactoemax.firebaseio.com/');

	fb.child('games/test');

	$('.panel').on('click', function (event) {
	  $(this).append('<p>text<p>');
	});
}());