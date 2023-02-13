$(function () {
  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  })
  $('.footer-top__title').on('click', function(){
    $(this).siblings().slideToggle();
    $(this).toggleClass('active');
  })
  $('.top-slider__inner').slick({
    infinite: true,
    dots: true,
    fade: true,
    prevArrow: '<button type = "button" class = "slick-prev"></ button>',
    nextArrow: '<button type = "button" class = "slick-next"></ button>'


  });
  $('.blog-page__slider').slick({

    prevArrow: '<img  class = "slick-prev" src="img/left-arrow.svg">',
    nextArrow: '<img class = "slick-next" src="img/right-arrow.svg">',
    infinite: false
  });

  $('.product__slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrow--left" src="img/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrow--right" src="img/arrow-right.svg" alt="">'

  });
  $('.slider-dots').slick({
    asNavFor: '.header__slider',
    slidesToShow: 4,
    slidesToScroll: 4


  });

   $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    vertical: true,
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 1


  });

  $('.product-slide__big').slick({

        asNavFor: '.product-slide__thumb',
        draggable: false,

        fade: true,
        arrows: false,
          responsive: [
          {
              breakpoint: 1000,
              settings: {
                  draggable: true
              }
          }
        ]

  });

  $(".star").rateYo({
    rating: 3.6,
    starWidth: '17px',
    normalFill: '#ccccee',
    ratedFill: '#ffc35b',
    readOnly: true
  });

  $(".filter-price__input").ionRangeSlider({
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.from);
    },

    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.from);
    },


  });




  $('.celect-style, .product-one__item-num').styler();

  $('.shop-content__filter-btn').on('click', function(){

    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function(){
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function(){
    $('.product-item').removeClass('product-item--list');
  });



  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault;
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock('promo__clock', deadline);
});

// Initialize and add the map
function initMap() {

  const uluru = { lat: 40.716, lng: -74.003 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

