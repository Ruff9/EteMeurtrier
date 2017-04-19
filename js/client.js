function zoneContact() {

  $contact = $('#contact');

  $('#bouton_contact').click(function(e) {
  	e.preventDefault();
  	$contact.css('display') == 'none' ? $contact.show() : $contact.hide();
  });

  $('.wrapper').click(function(e) {
    e.preventDefault();
    $contact.hide();
  });

}

function preload() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
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

  preload('/POINT_ZERO.jpg', '/faceA.png', '/faceB.png', '/indiens.png', '/isolee.png','/splendor.png');
  zoneContact();
  imageBackground();

  $('.popup_launcher').magnificPopup({type:'iframe'});

})