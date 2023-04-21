select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
  container = select('.container'),
  mainSVG = select('.mainSVG'),
  waveyPath = select('#waveyPath'),
  movingPath = select('#movingPath'),
  jumpingLorry = select('#jumpingLorry'),
  movingLorry = select('#movingLorry'),
  lorryGroup = select('#lorryGroup'),
  particleContainer = select('#particleContainer'),
  
  

//center the container cos it's pretty an' that
TweenMax.set(container, {
  position: 'absolute',
  top: '80%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})
TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set(lorryGroup, {
  transformOrigin: '50% 50%'
})
var waveyPathBezier = MorphSVGPlugin.pathDataToBezier(waveyPath.getAttribute('d'), {
  offsetX: -(lorryGroup.getBBox().width/2),
  offsetY: -(lorryGroup.getBBox().height) - waveyPath.getAttribute('stroke-width')
})

var tl = new TimelineMax({
  repeat: -1,
  onUpdate: playParticle
});
tl.to(lorryGroup, 15, {
    bezier: {
      type: "cubic",
      values: waveyPathBezier,
      autoRotate: true
    },
    ease: Linear.easeNone
  })
  // .to([movingPath, movingLorry], 6, {
  //   x: 100,
  //   ease: Linear.easeNone
  // }, '-=6')



//ScrubGSAPTimeline(tl);

function playParticle() {
  particleCount++;
  checkParticleCount();
}


tl.timeScale(1);
createParticlePool();
 //ScrubGSAPTimeline(tl);