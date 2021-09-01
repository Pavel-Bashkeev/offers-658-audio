const sliderCommentsInner = document.querySelector('.comments-slider');
const sliderComment = sliderCommentsInner.querySelector('.swiper-container');
if(sliderCommentsInner){
  const comments = new Swiper(sliderComment, {
    spaceBetween: 10,
    autoHeight: true,
    navigation: {
      prevEl: '.swiper-btn-prev',
      nextEl: '.swiper-btn-next',
    },
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
    loop: true
  });
}