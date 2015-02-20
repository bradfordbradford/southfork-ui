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


// Full Spread Loaded (imagesloaded.js)
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


// Select 2
// ---------
var locations = [
    { id: 0, text: 'Jefferson Tower <small>2121 W. 12th St. Atlanta, GA</small>' },
    { id: 1, text: 'Commerce Building <small>128 W. 12th St. Atlanta, GA</small>' },
    { id: 2, text: 'Fairmont Building <small>128 W. 12th St. Atlanta, GA</small>' },
    { id: 3, text: 'Park Cities Building <small>100 Broadway St. Atlanta, GA</small>' },
    { id: 4, text: 'The Joule <small>82 Pacific Ave. Atlanta, GA</small>' },
    { id: 5, text: 'Belmont Building <small>12 Atlantic Ave. Atlanta, GA</small>' },
    { id: 6, text: 'Claireview Building <small>2121 Atlantic Ave. Atlanta, GA</small>' },
    { id: 7, text: 'Transamerica Tower <small>102 Geary St. Atlanta, GA</small>' }
];

$(".location-select").select2({
  data: locations,
  placeholder: "Enter your delivery location.",
  maximumSelectionLength: 1,
  minimumInputLength: 1
})


// Tooltip
// ---------
$('[data-food-meta!=""]').qtip({ // Grab all elements with a non-blank data-food-meta attr.
    content: {
      attr: 'data-food-meta' // Tell qTip2 to look inside this attr for its content
    },
    position: {
      my: 'top center',
      at: 'bottom center'
    },
    style: {
      tip: {
          width: 14,
          height: 6
      },
      classes: 'qtip-food-meta'
    },
});

$('[data-menu-by-day!=""]').qtip({ // Grab all elements with a non-blank data-menu-by-day attr.
    content: {
      attr: 'data-menu-by-day' // Tell qTip2 to look inside this attr for its content
    },
    position: {
      my: 'top center',
      at: 'bottom center'
    },
    style: {
      tip: {
          width: 14,
          height: 6
      },
      classes: 'qtip-menu-by-day'
    },
    hide: {
        fixed: true,
        delay: 300
    }
});

