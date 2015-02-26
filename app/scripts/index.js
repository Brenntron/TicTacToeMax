/* globals $:false */

(function(){
	'use strict';

	var fb      = new Firebase('https://tictactoemax.firebaseio.com/'),
      $moves;

  $('#newGame').on('click', function newGame () {
    	$('.move').remove();
      $('.panel').removeAttr('data-move');
    });

	    $('.panel').on('click', function (event, data) {
		   	var $panel  = $(this);

        $moves = $('.move').length || 0;

	        if ($panel.attr("data-move")) {
		      alert("already played")
		    }
		    else if ($moves % 2 === 0) {
		      $(this).attr('data-move', 'X');
			  $(this).append('<div class="move">X</div>');
		      changeBoardState($panel, data);

	        }
		    else if ($moves % 2 === 1) {
	          $(this).attr('data-move', 'O');
			  $(this).append('<div class="move">O</div>');
		      changeBoardState($panel, data);

		    }

        $moves = $('.move').length;

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




  fb.child('games/test').once('value',function (snap) {
    var data = snap.val();

    loadBoardState(data);
  });

  $('#newGame').on('click', function () {
        var fbTestGame    = fb.child('games/test/boardState')
        var newBoardState = {
                            position0: 'undefined',
                            position1: 'undefined',
                            position2: 'undefined',
                            position3: 'undefined',
                            position4: 'undefined',
                            position5: 'undefined',
                            position6: 'undefined',
                            position7: 'undefined',
                            position8: 'undefined'
                            };

        fbTestGame.set(newBoardState);
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

      if (position !== 'undefined') {
        // $('p#' + panelId).append('<div class="move" data-attr=' + position + '>' + position + '</div>');
      $('p#' + panelId).append('<div class="move">' + position + '</div>');
      $('p#' + panelId).attr('data-move', position);
      }

    });
  }


}()); // end IIFE