console.log('Hide Elements for Effects');
$('.full-spread-cta').css('opacity: 0');

$(document).ready(function () {

  image_loaded = 0;
  all_images_loaded = 0;

  console.log('Document Ready');

  page_init = function(){
    setTimeout( function(){
      $( "body, html" ).scrollTop( 0 );
      $('#full-spread').waitForImages({
        finished: function() {
            all_images_loaded = 1;
            console.log('Loaded: Full-Spread Image');

            setTimeout( function(){
            $('.full-spread-cta').addClass('loaded');
            } , 610 );
        },
        waitForAll: true
    });
    load_once = 1;
    console.log('Fade Out: #white-fade');
    $('#white-fade').addClass('fade-out');
    setTimeout(function(){$('#white-fade').addClass('hide');}, 410);

    } , 410 );
  };

  console.log('Home Page!');
  page_init();

  menu_init = function(){
    setTimeout(function(){
      $('.menu-block').waitForImages({
        finished: function() {
            all_images_loaded = 1;
            console.log('Images Load: Menu images loaded');
            setTimeout( function(){
            $('.menu-block').addClass('loaded');
            } , 610 );
        },
        each: function() {
           console.log('Images Load: Menu images faded in');
        },
        waitForAll: true
    });
    },410);
  };
  menu_init();
  console.log('Menu Page!');

  go_foundation = function(){
    // $(function() {
    //   FastClick.attach(document.body);
    // });
    $(document).foundation();
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
  };

  console.log('Go Foundation!');
  go_foundation();


  // In View
  (function($) {
    $(document).ready(function() {
      $(window).scroll(function() {
        $('.detectView:in-viewport(400)').addClass('in-view');
      });
    });
  }(jQuery));


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


  // SMOOTH
  // --------------
  $(function() {
    $('a[href*=#]:not([href=#]):not(".no-scroll")').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // Hover - Slide Up
  $('.hover-slideUp').hover(function(){
    $(this).stop().animate({ top: -4}, 'slow', 'easeInOutCirc');
    }, function() {
        $(this).stop().animate({ top: 0}, 'slow', 'easeInOutCirc');
  });


  // Disabled Link
  // --------------
  $('a.disabled').click(function( event ) {
    event.preventDefault();});


  // Cart Update Alert
  // -----------------
  $('.menu-detail .order a').click(function(event) {
    event.preventDefault();
    $('.cart-update-alert').fadeIn('slow').slideUp('slow', 'easeInOutCirc');
  });


  // Partner Card Hover
  // -------------------
  $('.partner-card').hover(function() {
    var findContentHeight = $(this).find('.content')
    var height = $(findContentHeight).height()

    $(this).find('.content-wrap').stop().animate({ top: -height, opacity: .98 }, 'slow', 'easeInOutCirc');
    }, function() {
        $(this).find('.content-wrap').stop().animate({ top: 0,  opacity: 1 }, 'slow', 'easeInOutCirc');
  });


});


