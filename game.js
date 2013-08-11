$(function() {
	function blinkClock() {
		$('.digital-clock').toggle();
	}

	var dreamState = setInterval(blinkClock, 750);
	var narTxt = $(".narrator-text");

	function startIntro() {
		narTxt.hide();
		narTxt.text("Time.");
		narTxt.fadeIn(800).delay(1500).fadeOut(800, function() {
			$(this).text("It's funny how it works out.");
		}).delay(500).fadeIn(800).delay(2500).fadeOut(800, function() {
			$(this).text("You always think you have so much of it.");
		}).delay(500).fadeIn(800).delay(2500).fadeOut(800, function() {
			$(this).text("But then one day you wake up and realize that it's gone.");
		}).delay(500).fadeIn(800).delay(2500).fadeOut(800, function() {
			$(this).text("You never really had it in the first place.");
		}).delay(500).fadeIn(800).delay(2500).fadeOut(800, function() {
			$(this).text("Time had you.");
		}).delay(500).fadeIn(800).delay(2500).fadeOut(800);
	}

	$('.digital-clock').click(function() {
		startIntro();
	});
});
