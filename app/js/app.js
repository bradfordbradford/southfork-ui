var app = (function(document, $) {
	var docElem = document.documentElement,
		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
            // needed to use joyride
            // doc: http://foundation.zurb.com/docs/components/joyride.html
            $(document).on('click', '#start-jr', function () {
                $(document).foundation('joyride', 'start');
            });
			_userAgentInit();
		};
	return {
		init: _init
	};
})(document, jQuery);

(function() {
	app.init();
})();


// Images - imagesloaded.js
// ---------------------------------
$('.fade-img').hide();
var $images = $('.fade-img');
$('.fade-img').each(function(){
  var el = $(this), sources, image;
  if(sources = el.css('background-image')){
    $.each(sources.split(','), function(i, source){
      if(image = source.match(/url\((['"])?(.*?)\1\)/)){
        $images = $images.add($('<img>').attr('src', image.pop()));
      }
    });
  }
});

$images.imagesLoaded().progress(function(instance, image){
  var result = image.isLoaded ? 'loaded' : 'broken';
  console.log('Image:', result, image.img.src);
});

$images.imagesLoaded( function() {
    $('.fade-img').fadeIn('fast');
});



// Modal
$(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
  var modal = $(this);
  setTimeout(function(){
    modal.addClass('opened');
  }, 500);
});
$(document).on('close.fndtn.reveal', '[data-reveal]', function () {
  var modal = $(this);
  modal.removeClass('opened');
});


// Time Left to Order Lunch
$("#time-left").countdown({
    date: "27 February 2015 15:55:00", // Change this to your desired date to countdown to
    format: "on"
});