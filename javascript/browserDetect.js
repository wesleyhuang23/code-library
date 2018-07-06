function browserDetection() {
  if (navigator.userAgent.indexOf("Chrome") != -1) {

  } else if (navigator.userAgent.indexOf("Safari") != -1) {

  } else if (navigator.userAgent.indexOf("Firefox") != -1) {

  } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) { //IF IE > 10

  } else {

  }
}