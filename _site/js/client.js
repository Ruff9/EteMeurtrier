function zone_contact() {	
  $('#bouton_contact').click(function() {
  	$('#contact').css('display') == 'none' ? $('#contact').show() : $('#contact').hide()
  });

  $('.wrapper').click(function() {
  	$('#contact').hide();
  });
}

$(function(){

	zone_contact();

  $('.popup_launcher').magnificPopup({type:'iframe'});

  $('.popup_launcher').hover(function(e) {

    var $title      = $(this).children('h2');
    var $image      = $(this).children('img');
    var $background = $('#background_general');
    var $header     = $('header');

    var height = window.outerHeight;

    $background.css({
      'background-image': 'url(' + this.dataset.image + ')',
      'height': height
    });

    $header.css('background-color', 'transparent');
    
  }, function(e){
    var $background = $('#background_general');
    var $header     = $('header');
    
    $background.css('background-image', 'none');
    $header.css('background-color', 'black');
  });
})