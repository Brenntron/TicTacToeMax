(function(){
	'use strict';

	var fb = new Firebase('https://tictactoemax.firebaseio.com/'),
      counter = 0;


	fb.child('games/test').once('value',function (snap) {
		var data = snap.val();

    $('.panel').on('click', function (event) {
	  var $panel  = $(this);

    if ($panel.attr("data-move")) {
      console.log("already played")
    }
    else if (counter % 2 === 0) {
      console.log(counter);
      $(this).attr('data-move', 'x');
      $(this).append('<div class="move">x</div>');
      changeBoardState($panel, data);
      counter++;
    }
    else if (counter % 2 === 1) {
      console.log('o');
      $(this).attr('data-move', 'o');
      $(this).append('<div class="move">o</div>');
      changeBoardState($panel, data);
      counter++;
    }

    });

	}); //end fb.child

	function changeBoardState(panel, data) {
    var fbTestGame      = fb.child('games/test/boardState'),
	      $boardPosition  = panel.attr('id'),
        position        = 'position' + $boardPosition,
	      boardPosition   = {};

        boardPosition[position] = $boardPosition;

	      fbTestGame.update(boardPosition);

        console.log(fbTestGame);
	      console.log(data);

	} //end changeBoardState

}()); // end IIFE