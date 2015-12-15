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

    $title  = $(this).children('h2');
    $thumb  = $(this).children('img');

    var bottom  = $title.offset().top + $title.height();
    var top     = bottom - $thumb.height();
    var left    = $title.offset().left + $title.width() + 10;

    $thumb.css({
      top:  top,
      left: left
    });

    $thumb.css('display', 'block');
    
  }, function(e){

    $thumb = $(this).children('img');
    $thumb.css('display', 'none');

  });
})