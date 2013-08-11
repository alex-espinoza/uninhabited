$(function() {
	function blinkClock() {
		$(".digital-clock").toggle();
	}

	window.setInterval(blinkClock, 750);
});
