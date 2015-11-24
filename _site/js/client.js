$(function(){
  $('#bouton_contact').click(function() {
  	$('#contact').css('display') == 'none' ? $('#contact').show() : $('#contact').hide()
  });

  $('body').click(function() {
  	$('#contact').hide();
  });

  $('.popup_launcher').magnificPopup({type:'iframe'});
})