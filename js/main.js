// Controller
var controller = new ScrollMagic();
 
// 2. Curtain Timeline
var tlCurtain = new TimelineMax();
    tlCurtain.set($curtain, {yPercent: -100})
    .to($curtain, 0.3, {yPercent: 0, ease:Power4.easeOut})
    .to([tomatoLeft2, tomatoLeaves2, tomatoRight2, letters2, bracketRight2, bracketLeft2], 0.01, {fill: "#707070"})
    .to($curtain, 0.3, {yPercent: -100, ease:Power4.easeOut})
 
// 2. Curtain Scene
var scene = new ScrollScene({triggerElement: "#screen2 .imacInner"})
    .addTo(controller)
    .setTween(tlCurtain);