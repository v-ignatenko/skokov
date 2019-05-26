// $(document).ready js сначала грузит документ потом себя({
$(document).ready(function(){
   $('.responsive').slick({
      dots: true,
      // безконечность
      infinite: false,
      arrow: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
          infinite: false,
          arrow: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
     let scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
          $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
            }
          return false; // выключаем стандартное действие
        });
  


  $('.menu-btn, .menu-nav_link').on('click',function(e){
    e.preventDefault;
    $('.menu-btn, .menu-nav_link').toggleClass('menu-btn_active');
    $('.menu-nav').toggleClass('menu-nav_active');
  
    $(document).click(function(event) {
        if ($(event.target).closest(".menu-btn").length ) return;
        $('.menu-nav').removeClass('menu-nav_active');
        $('.menu-btn, .menu-nav_link').removeClass('menu-btn_active');
        event.stopPropagation();
    });
  });
});
   // проверка js!!!
   //  $('.button-right').on('click',function(){
   //     alert('dsdss');
   //  });

