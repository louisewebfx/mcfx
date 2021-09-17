$(document).on("click", ".step2 button.ant-btn-secondary" , function() {
         
         var $form = $('#root form');
           MCFX.Form.setup($form.get(0),{
            leadType : 'Sign Up',
             id : '61428b8bf4e4f1909c6d1ac7'
           });
         MCFX.Form.submit($form.get(0));
        console.log('manual submit...');
  

});
