const counter = () => {
  let count = setInterval(() => {
    let c = parseInt($('.counter').text());
    $('.counter').text((++c).toString());
    if ( c == 100 ) {
      clearInterval(count);
      $('.counter').addClass('hide');
      $('.preloader').addClass('active');
    }
  }, 20);
}

counter();