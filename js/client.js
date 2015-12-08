function zone_contact() {	
  $('#bouton_contact').click(function() {
  	$('#contact').css('display') == 'none' ? $('#contact').show() : $('#contact').hide()
  });

  $('.wrapper').click(function() {
  	$('#contact').hide();
  });
}

function hide_image(target) {
  $(document).mousemove(function() {
    target.css('display', 'none');
  })
}

$(function(){
	zone_contact();

  $('.popup_launcher').magnificPopup({type:'iframe'});

  $('h2').hover(function(e) {
    $thumb = $(this).siblings('img');

    setTimeout(function(){
      console.log('yo');

      $thumb.css({
        top:  e.pageY,
        left: e.pageX
      });

    	$thumb.css('display', 'block');

      if($thumb.css('display') == 'block') {
        setTimeout(function(){
          $(document).mousemove(function() {
            $thumb.css('display', 'none');
          });
        }, 200);
      }

      // $('h2').unbind();
   }, 20);

  });
})