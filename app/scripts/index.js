(function(){
	'use strict';

	var fb       = new Firebase('https://tictactoemax.firebaseio.com/')
	    fbRemove = fb.child('games/test');


	fb.child('games/test').once('value',function (snap) {
		var data = snap.val();

        $('.panel').on('click', function (event) {
		  var $panel = $(this);

	      if ($panel.attr("data-move")) {
	      	console.log("already played")
	      } else {
			  $(this).attr('data-move', 'x');
	          $(this).append('<div class="move">x</div>');
	          changeBoardState($panel, data);
		  }
		});
	}); //end fb.child

	function changeBoardState(panel, data) {
	  var boardState      = data.boardState,
	      $boardPosition  = panel.attr('id'),
	      boardPosition   = {position: $boardPosition},
	      fbTestGame      = fb.child('games/test/boardState');

	      fbTestGame.set(boardPosition);

	      console.log(data);


	}
}()); // end IIFE