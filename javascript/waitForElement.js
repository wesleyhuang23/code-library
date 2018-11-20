var waitForEl = function (selector, callback) {
  if (jQuery(selector).length) {
    callback();
  } else {
    setTimeout(function () {
      waitForEl(selector, callback);
    }, 100);
  }
};
waitForEl('SELECTOR', function () {
  //do something
});

//another example
var checkExist = setInterval(function() {
  if ($('#the-canvas').length) {
     console.log("Exists!");
     clearInterval(checkExist);
  }
}, 100); // check every 100ms