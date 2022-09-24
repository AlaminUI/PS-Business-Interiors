// Intro carousel
var heroCarousel = $("#heroCarousel");
var heroCarouselIndicators = $("#hero-carousel-indicators");
heroCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
  (index === 0) ?
  heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
    heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
});


heroCarousel.on('slid.bs.carousel', function(e) {
  $(this).find('.carousel-content ').addClass('animated fadeInDown');
});


var heroCarousel2 = $("#heroCarousel2");
var heroCarouselIndicators2 = $("#hero-carousel-indicators2");
heroCarousel2.find(".carousel-inner").children(".carousel-item").each(function(index) {
  (index === 0) ?
  heroCarouselIndicators2.append("<li data-target='#heroCarousel2' data-slide-to='" + index + "' class='active'></li>"):
    heroCarouselIndicators2.append("<li data-target='#heroCarousel2' data-slide-to='" + index + "'></li>");
});

heroCarousel2.on('slid.bs.carousel', function(e) {
  $(this).find('.carousel-content ').addClass('animated fadeInDown');
});

  // Initi AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  aos_init();