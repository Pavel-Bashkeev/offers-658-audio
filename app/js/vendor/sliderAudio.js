const sliderContainer = document.querySelector('.feedback-slider>.swiper-container');
if(sliderContainer){
  const sliderAudio = new Swiper(sliderContainer, {
    navigation: {
      prevEl: '.swiper-button-prev',
    },
    loop:true
  });
}