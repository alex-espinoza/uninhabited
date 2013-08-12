$(function() {
	function blinkClock() {
		$('.digital-clock').toggle();
	}

	var dreamState = setInterval(blinkClock, 750);

	$.fn.showDialogue = function(fadeInTime, showTextTime) {
		this.fadeIn(fadeInTime).delay(showTextTime);
		return this;
	};

	$.fn.showDialogueStall = function(fadeInTime, delayBeforeShowTime, stallTextFadeInTime, showTextTime) {
		this.fadeIn(fadeInTime, function() {
			$('.stall-text').delay(delayBeforeShowTime).animate({opacity: 1}, stallTextFadeInTime);
		}).delay(showTextTime);
		return this;
	};

	$.fn.prepareDialogue = function(fadeOutTime, dialogue) {
		this.fadeOut(fadeOutTime, function() {
			$(this).html(dialogue);
		});
		return this;
	};

	$.fn.prepareDialogueStall = function(fadeOutTime, dialogue) {
		this.fadeOut(fadeOutTime, function() {
			$(this).html(dialogue);
			$('.stall-text').css("opacity", "0");
		});
		return this;
	};

	function startIntro() {
		var narTxt = $(".narrator-text");
		var p1Txt = $(".person1-text");
		var p2Txt = $(".person2-text");
		var p2innerTxt = $(".person2inner-text");
		narTxt.hide();
		p1Txt.hide();
		p2Txt.hide();
		p2innerTxt.hide();

		narTxt.text("Time.");
		narTxt.showDialogue(1200, 3000).prepareDialogue(1200, "It's funny how it works out.").delay(900)
		.showDialogue(1200, 4000).prepareDialogue(1200, "You always think you have so much of it.").delay(900)
		.showDialogue(1200, 5000).prepareDialogueStall(1200, "Until one day you wake up and realize that it's <span class='stall-text'>gone.</span>").delay(900)
		.showDialogueStall(1200, 2800, 1200, 6000).prepareDialogue(1200, "You never really had it in the first place.").delay(900)
		.showDialogue(1200, 5000).prepareDialogue(1200, "Time had you.").delay(900)
		.showDialogue(1200, 6000).fadeOut(3600, function() {
			p1Txt.html("hey, are you awake?");
		}).delay(5000);
	}

	$('.digital-clock').click(function() {
		startIntro();
	});
});
