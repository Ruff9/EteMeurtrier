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

  $('h2').hover(function(e) {
    $thumb = $(this).siblings('img');
    // console.log($thumb[0].dataset.shown + ' avant');

    if($thumb[0].dataset.shown == 'false') {
      
      $thumb.css({
        top:  e.pageY,
        left: e.pageX
      });

      $thumb.css('display', 'block');

      setTimeout(function(){
        $thumb[0].dataset.shown = 'true';
      }, 100);
      // console.log($thumb[0].dataset.shown + ' apres');
    }

    if($thumb[0].dataset.shown == 'true') {
      $(document).mousemove(function() {
        $thumb.css('display', 'none');
      });
    }

  });
})


