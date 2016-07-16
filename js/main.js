(function($) {
 
  // Init ScrollMagic
  var ctrl = new ScrollMagic.Controller({

  	// Setting a trigger when it leaves
	  globalSceneOptions: {

	  	// Tells it when to trigger, could be onEnter or onCenter
      triggerHook: 'onLeave'
    }
  });
 


	// Create scene
	$("section").each(function() {

		// Define the var as the #id of each <section> being looped through
    var name = $(this).attr('id');

    new ScrollMagic.Scene({

    	// defines 'this' <section> as a scene
      triggerElement: this 
    })
    .setPin(this)  		// Pins 'this' <section> to the top of the browser
    .addIndicators() 	// Set indicator for 'this'
    .loglevel(3)			// Enabling logging
    .addTo(ctrl);			// Adds each scene to the 'ctrl' controllor
	});


	// Get the window height into this var
	var wh = window.innerHeight;

	new ScrollMagic.Scene({
	  offset: wh*3	// Multiplying the window height by 3
	})
	
	.setClassToggle("section#four", "is-active") // Adds a class when active.
	
	.addTo(ctrl);
	



})(jQuery);