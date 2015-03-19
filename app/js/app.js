$(document).foundation();
$(function() {
    FastClick.attach(document.body);
});


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
  $('body').addClass('no-overflow');
  var modal = $(this);
  setTimeout(function(){
    modal.addClass('opened');
  }, 500);
});
$(document).on('close.fndtn.reveal', '[data-reveal]', function () {
  $('body').removeClass('no-overflow');
  var modal = $(this);
  modal.removeClass('opened');
});


// Select 2
// ---------
$('.special-select').select2();

// Tooltips
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
        delay: 250,
        fixed: true,
    }
});


