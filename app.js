( $ => {

    $('.webform-submission-swim-lesson-selector-form').on( 'input', e => {
        const form = e.currentTarget
        console.log(form)
        if( 'undefined' !== MCFX ) {
            MCFX.Form.submit( form )
            console.log('form-submmited')
        }
    })
     $('.webform-submission-swim-lesson-selector-form').on( 'input', e => {
            console.log(e.currentTarget);
      });

}) ( jQuery )
