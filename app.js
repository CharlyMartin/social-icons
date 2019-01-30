console.log("running app.js");



// V1 ///////////////////////////////////////////////////////////
const facebookContainer = document.getElementById('facebookV1');

// Lottie initial config
const facebookV1 = bodymovin.loadAnimation({
  container: facebookContainer,
  path: 'data/Facebook_v1.1.json',
  renderer: 'svg',
  // default: pause on frame 0
  autoplay: false,
  loop: false,
})

// Events
// hover: play frames 0-90 then pause on frame 90
facebookContainer.addEventListener('mouseenter', () => {
  console.log("Mouse enters Facebook");
  // facebook.goToAndPlay(90, true);
  facebookV1.playSegments([0, 90], false);
});

// après hover: play frames 150-270 then pause on frame 270 (or frame 0)
facebookContainer.addEventListener('mouseleave', () => {
  console.log("Mouse leaves Facebook");
  facebookV1.playSegments([150, 270], false);
  // facebook.goToAndPlay(0, true) makes the animation freeze.
});









// V2 ///////////////////////////////////////////////////////////
const facebookContainerV2 = document.getElementById('facebookV2');

// setTimeout(function() {
//   // Not possible to select the generated SVG element at runtime as they are not 
//   // created yet by the player. Works with a setTimeout but not ideal.
//   const facebookSquare = document.querySelector('path#Facebook_blue_shade');
//   console.log(facebookSquare);
// }, 2000);

function playAndReload(anim) {
  anim.removeEventListener('complete');
  
  anim.play();
  console.log('anim starts playing');

  anim.addEventListener('complete', () => {
    anim.goToAndStop(0, true);
    console.log('anim done playing and reloaded to frame 0')
  })
}

// Lottie initial config
const facebookV2 = bodymovin.loadAnimation({
  container: facebookContainerV2,
  path: 'data/Facebook_v1.2.json',
  renderer: 'svg',
  autoplay: false,
  loop: false,
})

facebookV2.addEventListener('DOMLoaded', function() {
  console.log('anim loaded');
  
  const facebookBack = document.getElementById('facebook-back');
  // Selects the first mask of the SVG

  facebookBack.addEventListener('mouseenter', function() {
    console.log('First mask hovered');
    playAndReload(facebookV2);
  })
})

// facebookContainerV2.addEventListener('mouseenter', () => {
//   console.log("Mouse enters Facebook V2");
//   facebookV2.play();
  
//   facebookV2.addEventListener('complete', () => {
//     facebookV2.goToAndStop(0, true);
//   })
// });



// function test2() {
//   console.log("test2 running");

//   // Variables  
//   const facebookContainerV2 = document.getElementById('facebookV2');

//   // Lottie initial config
//   const facebookV2 = bodymovin.loadAnimation({
//     container: facebookContainerV2,
//     path: 'data/Facebook_v1.2.json',
//     renderer: 'svg',
//     autoplay: false,
//     loop: false,
//   })

//   facebookV2.addEventListener('DOMLoaded', function() {
//     console.log('loaded');
//   })

//   facebookContainerV2.addEventListener('mouseenter', () => {
//     console.log("Mouse enters Facebook V2");
//     facebookV2.play();
    
//     facebookV2.addEventListener('complete', () => {
//       facebookV2.goToAndStop(0, true);
//     })
//   });
// }

// document.addEventListener('DOMContentLoaded', test2);



// après hover: play frames 150-270 then pause on frame 270 (or frame 0)
// facebookContainerV2.addEventListener('mouseleave', () => {
//   console.log("Mouse leaves Facebook");
//   facebookV2.playSegments([150, 270], false);
//   // facebook.goToAndPlay(0, true) makes the animation freeze.
// });