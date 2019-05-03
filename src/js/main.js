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
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
});
   // проверка js!!!
   //  $('.button-right').on('click',function(){
   //     alert('dsdss');
   //  });

