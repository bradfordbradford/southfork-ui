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


// Full Spread Loaded
// ------------------
$('#full-spread').hide();
var $images = $('img');
$('#full-spread').each(function(){
  var el = $(this), sources, image;
  if(sources = el.css('background-image')){
    $.each(sources.split(','), function(i, source){
      if(image = source.match(/url\((['"])?(.*?)\1\)/)){
        $images = $images.add($('<img>').attr('src', image.pop()));
      }
    });
  }
});

console.log($images);

$images.imagesLoaded().progress(function(instance, image){
  var result = image.isLoaded ? 'loaded' : 'broken';
  console.log('Image:', result, image.img.src);
});

$images.imagesLoaded( function() {
    $('#full-spread').fadeIn('fast');
});