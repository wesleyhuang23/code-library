function scrollHeader(){
  var lastScrollTop = 0;
  $(window).scroll(function() {
    if(window.innerWidth < 1200 && window.scrollY > 65){ //values for different screen sizes
      var st = $(this).scrollTop();
      if (st > lastScrollTop){
          // downscroll code

      } else {
          // upscroll code

      }
      lastScrollTop = st;
    }
  });
}
