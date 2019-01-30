function appV3() {
  const facebookContainerV3 = document.getElementById('facebookV3');
  const baseUrl = 'https://raw.githubusercontent.com/CharlyMartin/social-icons/master/data/Facebook_v1.2.json';

  async function loadAnim(data) {
    return bodymovin.loadAnimation({
      container: facebookContainerV3,
      animationData: data,
      renderer: 'svg',
      autoplay: false,
      loop: false,
    })
  }

  function playAndReload(anim) {
    anim.removeEventListener('complete');
    
    anim.play();
    console.log('anim starts playing');

    anim.addEventListener('complete', () => {
      anim.goToAndStop(0, true);
      console.log('anim done playing and reloaded to frame 0')
    })
  }

  fetch(baseUrl)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      return loadAnim(data);
    })
    .then(function(anim) {
      const container = document.querySelector('#facebookV3 #facebook-back');
      
      container.addEventListener('mouseenter', function() {
        playAndReload(anim);
      })
    })
}

appV3();