function appV1() {
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
}

appV1();