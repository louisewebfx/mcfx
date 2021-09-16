( function( $ ) {$(function(){$('.ant-btn').on('click',function(){ 
  var email = $('[name=email]').val();
  var firstname = $('[name=first_name]').val();
  var lastname = $('[name=last_name]').val();
$('form').append('<input type="hidden" name="email" value="' + email+ '">');
  $('form').append('<input type="hidden" name="first_name" value="' + firstname+ '">');
  $('form').append('<input type="hidden" name="last_name" value="' + lastname+ '">');
});});}( jQuery ));
