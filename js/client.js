$(function(){
  // $('#bouton_contact').click(function() {
  // 	$('#contact').css('display') == 'none' ? $('#contact').show() : $('#contact').hide()
  // });

  // $('.wrapper').click(function() {
  // 	$('#contact').hide();
  // });

  $('.popup_launcher').magnificPopup({type:'iframe'});
  $('#bouton_contact').magnificPopup({type:'inline'});
})