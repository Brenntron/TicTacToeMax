(function(){
	'use strict';

	var fb = new Firebase('https://tictactoemax.firebaseio.com/');


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
    var fbTestGame      = fb.child('games/test/boardState'),
	      $boardPosition  = panel.attr('id'),
        position        = 'position' + $boardPosition,
	      boardPosition   = {};

        boardPosition[position] = $boardPosition;
	      fbTestGame.set(boardPosition);

        console.log(fbTestGame);
	      console.log(data);

	};

}()); // end IIFE