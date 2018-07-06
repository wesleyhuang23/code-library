const percentScrollTop = document.getElementsByClassName('')[0].offsetTop; //trigger when section is in view
window.addEventListener("scroll", () => {
  if (window.innerWidth > 992) {
    if (window.scrollY + 450 > percentScrollTop) { //higher the value farther away from the top
      for (var i = 0; i < progressBars.length; i++) {
        //do something
      }
    }
  } else if (window.innerWidth < 992) { //trigger later on smaller screens
    for (var i = 0; i < progressBars.length; i++) {
      //do something
    }
  }
});