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
			$(this).text("It's odd how it works out.");
		}).delay(500).fadeIn(800).delay(2500).fadeOut(800, function() {
			$(this).text("You always think you have so much of it.");
		}).delay(500).fadeIn(800).delay(2500).fadeOut(800, function() {
			$(this).text("But then one day you wake up and it's gone.");
		}).delay(500).fadeIn(800).delay(2500).fadeOut(800, function() {
			$(this).text("You never really had it.");
		}).delay(500).fadeIn(800).delay(2500).fadeOut(800, function() {
			$(this).text("Time had you.");
		}).delay(500).fadeIn(800).delay(2500).fadeOut(800);
		// $(".narrator-text").text("It's odd how it works out.");
		// $(".narrator-text").fadeIn(800).delay(3000).fadeOut(800).delay(1000);
		// $(".narrator-text").text("You always think you have so much of it.");
		// $(".narrator-text").fadeIn(800).delay(3000).fadeOut(800).delay(1000);
		// $(".narrator-text").text("But then one day you wake up and it's gone.");
		// $(".narrator-text").fadeIn(800).delay(3000).fadeOut(800).delay(1000);
		// $(".narrator-text").text("You never really had it.");
		// $(".narrator-text").fadeIn(800).delay(3000).fadeOut(800).delay(1000);
		// $(".narrator-text").text("Time had you.");
		// $(".narrator-text").fadeIn(800).delay(3000).fadeOut(800).delay(1000);
	}

	$('.digital-clock').click(function() {
		startIntro();
	});
});
