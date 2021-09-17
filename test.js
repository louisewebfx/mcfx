$(function(){
  $('form .ant-btn').click(function(){ 
   console.log('appending step1 form')
  var email = $('[name=email]').val();
  var firstname = $('[name=first_name]').val();
  var lastname = $('[name=last_name]').val();
$('.ant-form').append('<input type="hidden" name="email" value="' + email+ '">');
  $('.ant-form').append('<input type="hidden" name="first_name" value="' + firstname+ '">');
  $('.ant-form').append('<input type="hidden" name="last_name" value="' + lastname+ '">');
});

});
