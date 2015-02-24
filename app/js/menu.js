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