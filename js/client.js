function zoneContact() {

  $contact = $('#contact');

  $('#bouton_contact').click(function() {
  	$contact.css('display') == 'none' ? $contact.show() : $contact.hide();
    // return null;
  });

  $('.wrapper').click(function() {
    $contact.hide();
    // return null;
  });

}

function imageBackground() {

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
}

$(function(){

	zoneContact();
  imageBackground();

  $('.popup_launcher').magnificPopup({type:'iframe'});

})