function zone_contact() {

  $contact = $('#contact');

  $('#bouton_contact').click(function() {
  	$contact.css('display') == 'none' ? $contact.show() : $contact.hide();
  });

  $('.wrapper').click(function() {
  	$contact.hide();
  });

  return null;
}

$(function(){

	zone_contact();

  $('.popup_launcher').magnificPopup({type:'iframe'});

  var $background = $('#background_general');
  var $header     = $('header');

  $('h2').hover(function() {

    $background.css({
      'background-image': 'url(' + this.dataset.image + ')',
      'height': window.outerHeight
    });

    $header.css('background-color', 'transparent');
    
  }, function(){

    $background.css('background-image', 'none');
    $header.css('background-color', 'black');

  });
})