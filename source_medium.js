$(function(){
        setTimeout( function() {
            var urlParams = new URLSearchParams(window.location.search);
         
   
            if ( urlParams.get('utm_source') ) {
                var source = '<input type="hidden" name="utm_source" value="' + urlParams.get('utm_source') + '">';
                $( '#FSForm' ).append( source );
            }
            if ( urlParams.get('utm_medium') ) {
                var medium = '<input type="hidden" name="utm_medium" value="' + urlParams.get('utm_medium') + '">';
                $( '#FSForm' ).append( medium );
            }
            if ( urlParams.get('fx_id') ) {
                $( '#FSForm input[name="ga_id"]' ).val( urlParams.get('fx_id') );
            }
        }, 3000 );
});
