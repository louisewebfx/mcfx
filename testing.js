

$(document).on("click", "button.ant-btn-secondary" , function() {
          
           var email = $(this).closest('.step1').find('[name=email]').val();
            var firstname = $('input[name=first_name]').val();
            var lastname = $('input[name=last_name]').val();
             $('.ant-form').append('<input type="hidden" name="email" value="' + email+ '">');
            $('.ant-form').append('<input type="hidden" name="first_name" value="' + firstname+ '">');
            $('.ant-form').append('<input type="hidden" name="last_name" value="' + lastname+ '">');
           console.log(email);
    });
  
