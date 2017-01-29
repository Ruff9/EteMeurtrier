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


  }, function(){

    $background.css('background-image', 'none');

  });
}

$(function(){

  preload('/images/faceA.png', '/images/faceB.png', '/images/indiens.png', '/images/isolee.png','/images/splendor.png');
  zoneContact();
  imageBackground();

  $('.popup_launcher').magnificPopup({type:'iframe'});

})