(function ($) {
    'use strict';

$(window).load(function() {
    $('#preloader-wrapper').fadeOut('slow');
});

    $('.gallery-slider').owlCarousel(
        {
        pagination : true,
        autoPlay : 5000,
        itemsDesktop  :  [1500,4],
        itemsDesktopSmall :  [979,3]
        }
    );

    // Gallery Popup
    $('.image-popup').magnificPopup({type:'image'});

window.onscroll = function() {myFunction()};

var header = document.getElementById("MyHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


})(jQuery);







