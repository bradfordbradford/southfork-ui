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
