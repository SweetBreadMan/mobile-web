$(function() {
  /* Include HTML */
  $('.main-header-include').load('../include/main-header.html');
  $('.footer-include').load('../include/footer.html')
  $('.gnb-include').load('../include/gnb.html');

  /* Front Event Slider */
  const $slider = $('.front-slider');
  if ($slider.length) {
    let currentSlide;
    let slidesCount;
    const sliderCounter = document.createElement('span');
    sliderCounter.classList.add('slider-counter');

    const updateSliderCounter = function (slick, currentIndex) {
      currentSlide = slick.slickCurrentSlide() + 1;
      slidesCount = slick.slideCount;
      $(sliderCounter).text(currentSlide + ' / ' + slidesCount)
    };

    $slider.on('init', function (event, slick) {
      $slider.append(sliderCounter);
      updateSliderCounter(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });

    $slider.slick({
      slidesToShow: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true
    })
  };

  /* Front Hot Product Slider */

  $('.goods-hot-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: false,
    arrow: false
  });

  /* Goods Detail Slider */
  $('.goods-detail-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrow: false,
    autoplay: true,
    autoplaySpeed: 3000
  });

  /* Heart */
  $('.btn-heart').click(function(){
    $(this).toggleClass('active');
  });

  /* Tab Button Scroll */
  $('.tab-btn label').click(function(){
    const tabInnerTop = $('.goods-tab-inner').offset().top - 78;
    $("html, body").animate({scrollTop: tabInnerTop}, 0);
  });

  /* Goods Order Buttons */
  $('.goods-order-btns .btn-order').click(function(){
    $('body').addClass('active');
    $('.goods-order-final').addClass('active');
    $(this).parent().addClass('active');
    $('.overlay').addClass('active');
  });
  $('.overlay').click(function(){
    $('body').removeClass('active');
    $('.goods-order-final').removeClass('active');
    $(this).parent().removeClass('active');
    $('.overlay').removeClass('active');
  });

  /* Quantity-selector & Price */
  let $num = parseInt($('.quantity').text());
  let $price = $('.price-quantity b');
  let $priceFinal = $('.price-final em');
  let $quantityFinal = $('.price-final b span');

  $('.minus').css('color', 'var(--placeholder)');

  $('.minus').click(function(){
    $num--;
    if ($num <= 0) {
      $num = 1;
    }
    $('.quantity').text($num);
  });
  $('.plus').click(function(){
    $num++;
    if ($num > 5) {
      $num = 5;
    }
    $('.quantity').text($num);
  });
  $('.quantity-selector button').click(function(){
    if ($num <= 1) {
      $('.minus').css('color', 'var(--placeholder)');
    } else {
      $('.minus').css('color', 'black');
    }
    if ($num >= 5) {
      $('.plus').css('color', 'var(--placeholder)');
    } else {
      $('.plus').css('color', 'black');
    }
    if ($num == 1) {
      $price.text('13,000원');
      $priceFinal.text('13,000원');
      $quantityFinal.text($num);
    } else if ($num == 2) {
      $price.text('26,000원');
      $priceFinal.text('26,000원');
      $quantityFinal.text($num);
    } else if ($num == 3) {
      $price.text('39,000원');
      $priceFinal.text('39,000원');
      $quantityFinal.text($num);
    } else if ($num == 4) {
      $price.text('52,000원');
      $priceFinal.text('52,000원');
      $quantityFinal.text($num);
    } else {
      $price.text('65,000원');
      $priceFinal.text('65,000원');
      $quantityFinal.text($num);
    }
  });

  /* Search Clear */
  $('.search-content .btn-all-clear').click(function(){
    $('.search-recent .items').hide();
    $('.search-empty').show();
  });

  /* Cart Clear */
  $('.cart-content .btn-clear').click(function(){
    $(this).parent().parent().addClass('hide');
    if ($('.cart-item:nth-child(1)').hasClass('hide') === true && $('.cart-item:nth-child(2)').hasClass('hide') === true) {
      $('.cart-items-summary').hide();
      $('.cart-empty').show();
      $('.btn-cart-order').html('쇼핑하러 가기');
    }
  });
  $('.cart-content .btn-all-clear').click(function(){
    $('.cart-items').hide();
    $('.cart-items-summary').hide();
    $('.cart-empty').show();
    $('.btn-cart-order').html('쇼핑하러 가기');
  });
  $('.btn-cart-order').click(function(){
    if($(this).html() == '쇼핑하러 가기') {
      location.href = 'front.html';
    }
  })

  /* Signup Checkbox */
  $('.agree-all label').click(function(){
    if ($('.agree-all-checkbox').is(':checked')) {
      $('.agree-item label input:checkbox').prop('checked', true);
    } else {
      $('.agree-item label input:checkbox').prop('checked', false);
    }
  });

  /* Go To Top Button */
  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
      $('.btn-gotop').stop().fadeIn();
    } else {
      $('.btn-gotop').stop().fadeOut();
    }
  });
  $('.btn-gotop').click(function(){
    $('html, body').animate({scrollTop: 0}, 400);
    return false;
  });
})

