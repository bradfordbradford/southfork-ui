var $locationsSelect = $(".location-select");

// Select 2 Locations
// -------------------
var locations = [
    { id: 0, text: 'Jefferson Tower (2121 W. 12th St. Atlanta, GA)' },
    { id: 1, text: 'Commerce Building (128 W. 12th St. Atlanta, GA)' },
    { id: 2, text: 'Fairmont Building (128 W. 12th St. Atlanta, GA)' },
    { id: 3, text: 'Park Cities Building (100 Broadway St. Atlanta, GA)' },
    { id: 4, text: 'The Joule (82 Pacific Ave. Atlanta, GA)' },
    { id: 5, text: 'Belmont Building (12 Atlantic Ave. Atlanta, GA)' },
    { id: 6, text: 'Claireview Building (2121 Atlantic Ave. Atlanta, GA)' },
    { id: 7, text: 'Transamerica Tower (102 Geary St. Atlanta, GA)' }
];

var selectedLocation = [
    { id: 0, text: 'Jefferson Tower (2121 W. 12th St. Atlanta, GA)' }
];


$locationsSelect.select2({
  data: locations,
  placeholder: "Enter Your Delivery Address",
  maximumSelectionLength: 1,
  minimumInputLength: 1
});
