const sidebar = document.querySelector('#sidebar');
const openBtn = document.querySelector('#open-btn i');

openBtn.addEventListener('click', () => {
    sidebar.classList.toggle('close');

    if(sidebar.classList.contains('close')){
        openBtn.classList.remove('bi-arrow-left-circle-fill');
        openBtn.classList.add('bi-arrow-right-circle-fill');
    } else{
        openBtn.classList.remove('bi-arrow-right-circle-fill');
        openBtn.classList.add('bi-arrow-left-circle-fill');
    }
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView:1
        },
        
        620:{
            slidesPerView:2
        },

        1024:{
            slidesPerView:3
        }
    }
});
