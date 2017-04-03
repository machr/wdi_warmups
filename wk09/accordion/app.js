// console.log('Ready');

var accordionBtn = $('.accordion-button');

accordionBtn.on('click', function(event){
  var $menuSection = $(event.target).closest('.menu-section');
  var $menuItems = $('.menu-items');
  $menuSection.find($menuItems).toggleClass('show');


});
