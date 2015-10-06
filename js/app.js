
function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playBackground() {
	$('#bg-sound')[0].volume = 0.3;
  $('#bg-sound')[0].load();
  $('#bg-sound')[0].play();
}

function stopBackground() {
	$('#bg-sound')[0].pause();
}

function playCool() {
	$('#cool-sound')[0].volume = 0.5;
  $('#cool-sound')[0].load();
  $('#cool-sound')[0].play();
}

function stopPlayCool() {
	$('#cool-sound')[0].pause();
}


function showInstructions() {
	$('.instructions p:first-child').fadeIn(1000, function() {
		$(this).next().fadeIn(2000, function() {
			$(this).next().fadeIn(2000);
		});
	});
}

function hideInstructions() {
	var word = '<img class="word" src="images/word.png"/>';
	$('.instructions').children().hide();
	$(word).appendTo('.instructions');
}

$(document).ready(function(){
	playBackground();
	showInstructions();

	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	}).mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();	
	}).mousedown(function(){
		playHadouken();
		hideInstructions();		
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate({'left': '1020px'}, 'slow', function(){
			$(this).hide();
			$(this).css('left', '520px');
			$('.instructions p').fadeIn('slow');
			$('.word').remove();
		});
	}).mouseup(function(){
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();
	});

	var playing = false;
	$(document).keydown(function(e) {
		if(e.which === 88){
			$('.ryu-cool').show().siblings().hide();
			if (playing === false) {
				playCool();
			}
			playing = true;
			stopBackground();
		}
	}).keyup(function() {
		$('.ryu-cool').hide();
		$('.ryu-still').show();
		playBackground();
		stopPlayCool();
		playing = false;
	});
});
