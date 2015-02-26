(function(){
	'use strict';

	var fb      = new Firebase('https://tictactoemax.firebaseio.com/'),
        counter = 0;

        $('#newGame').on('click', newGame
        )

        function newGame () {
        	$('.move').remove();

        }


	fb.child('games/test').once('value',function (snap) {
		var data = snap.val();

	    $('.panel').on('click', function (event) {
		   	var $panel  = $(this);

	        if ($panel.attr("data-move")) {
		      alert("already played")
		    }
		    else if (counter % 2 === 0) {
		      $(this).attr('data-move', 'X');
			  $(this).append('<div class="move">X</div>');
		      changeBoardState($panel, data);
		      counter++;
	        }
		    else if (counter % 2 === 1) {
	          $(this).attr('data-move', 'O');
			  $(this).append('<div class="move">O</div>');
		      changeBoardState($panel, data);
	   	      counter++;
		    }

		    var piece = 'X';

		    if (piece === 'X') {
              piece === 'O'
		    } else {
              piece === 'X'
		    }

		   	if ($('#0').attr('data-move') === piece && $('#1').attr('data-move') === piece && $('#2').attr('data-move') === piece) {
		   		alert(piece + ' Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#3').attr('data-move') === piece && $('#4').attr('data-move') === piece && $('#5').attr('data-move') === piece) {
		   		alert(piece + ' Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#6').attr('data-move') === piece && $('#7').attr('data-move') === piece && $('#8').attr('data-move') === piece) {
		   		alert(piece + ' Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#0').attr('data-move') === piece && $('#3').attr('data-move') === piece && $('#6').attr('data-move') === piece) {
		   		alert(piece + ' Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#1').attr('data-move') === piece && $('#4').attr('data-move') === piece && $('#7').attr('data-move') === piece) {
		   		alert(piece + ' Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#2').attr('data-move') === piece && $('#5').attr('data-move') === piece && $('#8').attr('data-move') === piece) {
		   		alert(piece + ' Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#0').attr('data-move') === piece && $('#4').attr('data-move') === piece && $('#8').attr('data-move') === piece) {
		   		alert(piece + ' Wins!');
		   		$('.panel').off('click');
		   	} else if ($('#2').attr('data-move') === piece && $('#4').attr('data-move') === piece && $('#6').attr('data-move') === piece) {
		   		alert(piece + ' Wins!');
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