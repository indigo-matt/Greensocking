$(document).ready(function() {

  // Box 1
  var tween1 = TweenLite.to(
    $('#logo'),                   // Target object
    1,                      // Duration
    { left:"632px",         // Destination values
      top: "10px",
      backgroundColor: "blue",
      ease:Bounce.easeOut,  // Easing
      delay: .3,
      onComplete:completeHandler
    }
  );

  // Box 2
  var tween2 = TweenLite.from(
    $('#bar'),                   // Target object
    1,                      // Duration
    { width:"100%",         // Destination values
      ease:Bounce.easeOut,  // Easing
      delay: .3
    }
  );

  // Multiple items
  var tween3 = TweenMax.staggerTo(  // Staggering an array
    $('#list li'),
    1,
    {
      backgroundColor: "green",
      scale: ".5",
      delay: 1
    },
    1
  );

  function completeHandler(message) {
    console.log('done');
    $('#completeOutput').html('Animation completed.');
  }



  // Click Events /////////////////////////////////////////////////////
  var moveBtn = document.getElementById("move");
  var restartBtn = document.getElementById("repeat");
  
  // Click event: Move
  moveBtn.onclick = function() {
    TweenLite.to(
      $('#logo'),
      0.5, {
        left:"-=50px",
        top: "-=-10px"
      }
    );
  }

  // Click event: Repeat evemt
  restartBtn.onclick = function() {
    tween1.restart();
  }







});

