( function( $ ) {$(function(){$('.ant-btn').on('click',function(){ 
  var email = $('[name=email]').val();
  var firstname = $('[name=first_name]').val();
  var lastname = $('[name=last_name]').val();
$('[name=ga_id]').append('<input type="hidden" name="email" value="' + email+ '">');
  $('[name=ga_id]').append('<input type="hidden" name="first_name" value="' + firstname+ '">');
  $('[name=ga_id]').append('<input type="hidden" name="last_name" value="' + lastname+ '">');
});});}( jQuery ));
