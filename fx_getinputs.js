$(document).on("click", ".step1 button.ant-btn-secondary" , function() {
     var ga = $(this).closest('.step1').find('[name=ga_id]').val();
     var email = $(this).closest('.step1').find('[name=email]').val();
     var firstname = $(this).closest('.step1').find('[name=first_name]').val(); 
     var lastname = $(this).closest('.step1').find('[name=last_name]').val(); 
     $('.ant-form').append('<input type="hidden" name="email" value="' + email+ '">');
     $('.ant-form').append('<input type="hidden" name="first_name" value="' + firstname+ '">');
     $('.ant-form').append('<input type="hidden" name="last_name" value="' + lastname+ '">');
      if(ga === undefined) {
          $('.ant-form').append('<input type="hidden" name="mcfx_form_id" value="' + localStorage.getItem("mcfx_form_id")+ '">');
          $('.ant-form').append('<input type="hidden" name="fx_type" value="' + localStorage.getItem("fx_type")+ '">');
          $('.ant-form').append('<input type="hidden" name="ga_id" value="' + localStorage.getItem("ga_id")+ '">');
          $('.ant-form').append('<input type="hidden" name="ga_count" value="' + localStorage.getItem("ga_count")+ '">');
          $('.ant-form').append('<input type="hidden" name="lmfx_submit_uuid" value="' + localStorage.getItem("lmfx_submit_uuid")+ '">');
    
        
      }
    
 });
