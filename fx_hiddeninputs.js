$(function(){
 setTimeout(function(){
      var mcfx_form_id = $('[name=mcfx_form_id]').val();
      var fx_type = $('[name=fx_type]').val();
      var ga_id = $('[name=ga_id]').val();
      var ga_count = $('[name=ga_count]').val();
      var lmfx_submit_uuid = $('[name=lmfx_submit_uuid]').val();
   
     localStorage.setItem("mcfx_form_id",mcfx_form_id);
     localStorage.setItem("fx_type",fx_type);
     localStorage.setItem("ga_id",ga_id);
     localStorage.setItem("ga_count",ga_count);
     localStorage.setItem("lmfx_submit_uuid",lmfx_submit_uuid);
   
   
 },3000);
});
