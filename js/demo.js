$(document).ready(init);

function init() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

	$.fn.scrollPath("getPath")

		// Starting Place
		.moveTo(
			/* Left */ 0,
			/* Top  */ 0,
			/* Name */ { name: "step1" }
		)

		.lineTo(
			/* Left */ 1000,
			/* Top  */ 0,
			/* Name */ { name: "step2" }
		)

		.lineTo(
			/* Left */ 1000,
			/* Top  */ 1000,
			/* Name */ { name: "step3" }
		)

		.lineTo(
			/* Left */ 2000,
			/* Top  */ 1000,
			/* Name */ { name: "step4" }
		)

		.lineTo(
			/* Left */ 2000,
			/* Top  */ 2000,
			/* Name */ { name: "step5" }
		)

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: false});


	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			

			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});




	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});
}

