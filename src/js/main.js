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
            slidesToShow: 2,
            slidesToScroll: 2
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
});
   // проверка js!!!
   //  $('.button-right').on('click',function(){
   //     alert('dsdss');
   //  });

