(function(){
	'use strict';

	var fb      = new Firebase('https://tictactoemax.firebaseio.com/'),
        counter = 0;


	fb.child('games/test').once('value',function (snap) {
		var data = snap.val();

	    $('.panel').on('click', function (event) {
		   	var $panel  = $(this);

	        if ($panel.attr("data-move")) {
		      console.log("already played")
		    }
		    else if (counter % 2 === 0) {
		      $(this).attr('data-move', 'x');
			  $(this).append('<div class="move">x</div>');
		      changeBoardState($panel, data);
		      counter++;
	        }
		    else if (counter % 2 === 1) {
	          $(this).attr('data-move', 'o');
			  $(this).append('<div class="move">o</div>');
		      changeBoardState($panel, data);
	   	      counter++;
		    }
		   	if ($('#0').attr('data-move') === 'x' && $('#1').attr('data-move') === 'x' && $('#2').attr('data-move') === 'x') {
		   		alert('X Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#3').attr('data-move') === 'x' && $('#4').attr('data-move') === 'x' && $('#5').attr('data-move') === 'x') {
		   		alert('X Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#6').attr('data-move') === 'x' && $('#7').attr('data-move') === 'x' && $('#8').attr('data-move') === 'x') {
		   		alert('X Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#0').attr('data-move') === 'x' && $('#3').attr('data-move') === 'x' && $('#6').attr('data-move') === 'x') {
		   		alert('X Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#1').attr('data-move') === 'x' && $('#4').attr('data-move') === 'x' && $('#7').attr('data-move') === 'x') {
		   		alert('X Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#2').attr('data-move') === 'x' && $('#5').attr('data-move') === 'x' && $('#8').attr('data-move') === 'x') {
		   		alert('X Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#0').attr('data-move') === 'x' && $('#4').attr('data-move') === 'x' && $('#8').attr('data-move') === 'x') {
		   		alert('X Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#2').attr('data-move') === 'x' && $('#4').attr('data-move') === 'x' && $('#6').attr('data-move') === 'x') {
		   		alert('X Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#0').attr('data-move') === 'o' && $('#1').attr('data-move') === 'o' && $('#2').attr('data-move') === 'o') {
		   		alert('O Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#3').attr('data-move') === 'o' && $('#4').attr('data-move') === 'o' && $('#5').attr('data-move') === 'o') {
		   		alert('O Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#6').attr('data-move') === 'o' && $('#7').attr('data-move') === 'o' && $('#8').attr('data-move') === 'o') {
		   		alert('O Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#0').attr('data-move') === 'o' && $('#3').attr('data-move') === 'o' && $('#6').attr('data-move') === 'o') {
		   		alert('O Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#1').attr('data-move') === 'o' && $('#4').attr('data-move') === 'o' && $('#7').attr('data-move') === 'o') {
		   		alert('O Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#2').attr('data-move') === 'o' && $('#5').attr('data-move') === 'o' && $('#8').attr('data-move') === 'o') {
		   		alert('O Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#0').attr('data-move') === 'o' && $('#4').attr('data-move') === 'o' && $('#8').attr('data-move') === 'o') {
		   		alert('O Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#2').attr('data-move') === 'o' && $('#4').attr('data-move') === 'o' && $('#6').attr('data-move') === 'o') {
		   		alert('O Wins!');
		   		$('.panel').off('click');
		   	}
        });

	}); //end fb.child

  fb.child('games/test').once('value',function (snap) {
    var data = snap.val();

    loadBoardState(data)
  });

	function changeBoardState(panel, data) {
      var fbTestGame     = fb.child('games/test/boardState'),
	        $boardPosition = panel.attr('id'),
          $boardMove     = panel.attr('data-move'),
          position       = 'position' + $boardPosition,
	        boardPosition  = {};

          boardPosition[position] = $boardMove;

	      fbTestGame.update(boardPosition);
	} //end changeBoardState

  function loadBoardState(data) {
    var boardState = data.boardState;
    console.log(boardState);

    _.forEach(boardState, function (position, key) {
      var panelId = key[8];

      $('p#' + panelId).append('<div class="move">' + position + '</div>');
    });
  }

}()); // end IIFE