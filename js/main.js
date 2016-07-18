(function($) {
 
  // Trigger AOS
	AOS.init();

  // Debug logging
  $(window).scroll( function(event) {
      console.log( $(this).scrollTop() );
  });

  // Rellax
  var rellax = new Rellax('.rellax');

})(jQuery);