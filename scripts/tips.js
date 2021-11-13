document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('.splide', {
      type: 'loop',
      width: '90%',
      gap: 25,
      arrows: 'slider',
      //rewind : true,
      //cover:true,
      //heightRatio : 0.3,
      perPage: 3,
      focus: 'center',
      slideFocus: true,
      flickMaxPages: 3,
      updateOnMove: true,
      pagination: true,
      padding: 0,
      throttle: 300,
      breakpoints: {
        700: {
          perPage: 1,
          padding: 0,
        }
      }
    }).mount();
  });
  
  