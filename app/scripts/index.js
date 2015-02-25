(function(){
	'use strict';

	var fb = new Firebase('https://tictactoemax.firebaseio.com/');

	fb.child('games/test');

	$('.panel').on('click', function (event) {
	  var $panel = $(this);

      if ($panel.attr("data-move")) {
      	console.log("already played")
      } else {
		  $(this).attr('data-move', 'x');
      $(this).append('<div class="move">x</div>');
	  }
	});
}());