
  $(document).on("click", ".step2 button.ant-btn-secondary" , function() {
         var $form = $('#root form');
         MCFX.Form.submit($form.get(0));
        console.log('manual submit...');
  

});
