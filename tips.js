document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('.splide', {
      type: 'loop',
      width: '90%',
      gap: -80,
      //heightRatio : 0.3,
      perPage: 3,
      focus: 'center',
      //slideFocus: true,
      flickMaxPages: 3,
      updateOnMove: true,
      pagination: true,
      trimSpace: 'move',
      //padding: { left: 100, right: 20 },
      padding: '100%',
      throttle: 300,
      breakpoints: {
        1440: {
          perPage: 1,
          padding: '30%'
        }
      }
    }).mount();
  });
  