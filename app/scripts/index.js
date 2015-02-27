/* globals $:false */

(function(){
	'use strict';

	var fb      = new Firebase('https://tictactoemax.firebaseio.com/'),
      $moves;

  $('#newGame').on('click', function() {
    newGame();
  });

  $('.panel').on('click', function (event, data) {
   	var $panel  = $(this);

    $moves = $('.move').length || 0;

      if ($panel.attr("data-move")) {
      alert("already played")
    }
    else if ($moves % 2 === 0) {
      $(this).attr('data-move', 'X');
	  $(this).append('<div class="move"><img src="http://vignette1.wikia.nocookie.net/knightsanddragons/images/c/c2/Peanut-butter-jelly-time.gif"></div>');
      changeBoardState($panel, data);

      }
    else if ($moves % 2 === 1) {
        $(this).attr('data-move', 'O');
	  $(this).append('<div class="move"><img src="http://images.clipartpanda.com/peanut-butter-sandwich-no-jelly-1396466202672-tumblr_m1jpelUzm71qbe0gto1_400.gif"></div>');
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
   		newGame();
   	} else if ($('#3').attr('data-move') === piece && $('#4').attr('data-move') === piece && $('#5').attr('data-move') === piece) {
   		alert(piece + ' Wins!');
   		newGame();
   	} else if ($('#6').attr('data-move') === piece && $('#7').attr('data-move') === piece && $('#8').attr('data-move') === piece) {
   		alert(piece + ' Wins!');
   		newGame();
   	} else if ($('#0').attr('data-move') === piece && $('#3').attr('data-move') === piece && $('#6').attr('data-move') === piece) {
   		alert(piece + ' Wins!');
   		newGame();
   	} else if ($('#1').attr('data-move') === piece && $('#4').attr('data-move') === piece && $('#7').attr('data-move') === piece) {
   		alert(piece + ' Wins!');
   		newGame();
   	} else if ($('#2').attr('data-move') === piece && $('#5').attr('data-move') === piece && $('#8').attr('data-move') === piece) {
   		alert(piece + ' Wins!');
   		newGame();
   	} else if ($('#0').attr('data-move') === piece && $('#4').attr('data-move') === piece && $('#8').attr('data-move') === piece) {
   		alert(piece + ' Wins!');
   		newGame();
   	} else if ($('#2').attr('data-move') === piece && $('#4').attr('data-move') === piece && $('#6').attr('data-move') === piece) {
   		alert(piece + ' Wins!');
   		newGame();
   	}
});

  fb.child('games/test').once('value',function (snap) {
    var data = snap.val();
    loadBoardState(data);
  });

  function newGame () {
    var fbTestGame    = fb.child('games/test/boardState'),
        newBoardState = {
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

        $('.move').remove();
        $('.panel').removeAttr('data-move');

  }

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

      // if (position !== 'undefined') {
      //   // $('p#' + panelId).append('<div class="move" data-attr=' + position + '>' + position + '</div>');
      // $('p#' + panelId).append('<div class="move">' + position + '</div>');
      // $('p#' + panelId).attr('data-move', position);
      // }

      if (position === 'X') {
        // $('p#' + panelId).append('<div class="move" data-attr=' + position + '>' + position + '</div>');
      $('p#' + panelId).append('<div class="move"><img src="http://vignette1.wikia.nocookie.net/knightsanddragons/images/c/c2/Peanut-butter-jelly-time.gif"></div>');
      $('p#' + panelId).attr('data-move', position);
      }

      if (position === 'O') {
        // $('p#' + panelId).append('<div class="move" data-attr=' + position + '>' + position + '</div>');
      $('p#' + panelId).append('<div class="move"><img src="http://images.clipartpanda.com/peanut-butter-sandwich-no-jelly-1396466202672-tumblr_m1jpelUzm71qbe0gto1_400.gif"></div>');
      $('p#' + panelId).attr('data-move', position);
      }

    });
  }


}()); // end IIFE