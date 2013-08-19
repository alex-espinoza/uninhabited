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

	function startIntroduction1() {
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
		.showDialogueStall(1200, 2800, 1200, 7000).prepareDialogue(1200, "You never really had it in the first place.").delay(900)
		.showDialogue(1200, 5000).prepareDialogue(1200, "Time had you.").delay(900)
		.showDialogue(1200, 5000).fadeOut(3600, function() {
			startIntroduction2();
		});
	}

	function startIntroduction2() {
		var p1Text = $(".person1-text");
		var p2Text = $(".person2-text");
		var p2InnerText = $(".person2inner-text");
		var answerText = $("#answer-holder");
		var holders = $('#text-holder');
		p1Text.hide();
		p2Text.hide();
		p2InnerText.hide();
		answerText.hide();

		dialogueExchange1();

		function dialogueExchange1() {
			p1Text.text("hey").delay(3000).showDialogue(800, 3000);

			holders.promise().done(function() {
				dialogueExchange2();
			});
		}

		function dialogueExchange2() {
			p1Text.prepareDialogue(800, "hey, are you awake?").delay(900).showDialogue(800, 4000);

			p2InnerText.text("...").delay(2500).showDialogue(800, 2000);

			holders.promise().done(function() {
				dialogueExchange3();
			});
		}

		function dialogueExchange3() {
			p1Text.prepareDialogue(800, "wake up").delay(900).fadeIn(800);

			p2InnerText.fadeOut(800);

			holders.promise().done(function() {
				answerChoices1();
			});
		}

		function answerChoices1() {
			var answerChosen = "";

			answerText.html("<span id='answer1' class='choice-text'>Respond</span><span id='answer2' class='choice-text'>Ignore</span>").fadeIn(800);

			$('#answer1').click(function() {
				answerChosen = $(this).text();
				dialogueExchange4_a();
			});

			$('#answer2').click(function() {
				answerChosen = $(this).text();
				dialogueExchange4_b();
			});
		}

		function dialogueExchange4_a() {
			p1Text.prepareDialogue(800, "i knew you were awake").delay(900).fadeIn(800);

			p2Text.prepareDialogue(800, "yeah...").delay(2700).fadeIn(800);

			answerText.fadeOut(800);
		}

		function dialogueExchange4_b() {
			p1Text.prepareDialogue(800, "i know you're awake").delay(900).fadeIn(800);

			answerText.fadeOut(800);
		}

		// p1Text.text("hey");
		// p1Text.delay(1000).showDialogue(800, 3000) // 4800
		// .prepareDialogue(800, "hey, are you awake?").delay(900) // 6500
		// .showDialogue(800, 4000).prepareDialogue(800, "wake up").delay(900) // 12000
		// .showDialogue(800, 3000).prepareDialogue(800, "don't leave me alone like this").delay(900)
		// .showDialogue(800, 4000).fadeOut(800);

		// p2Text.text("...");
		// // p2Text.delay(8300).showDialogue(800, 1500).fadeOut(800);

		// p2InnerText.text("...");
		// p2InnerText.delay(9000).showDialogue(800, 1500).fadeOut(800);
	}

	$('.digital-clock').click(function() {
		startIntroduction1();
	});
});
