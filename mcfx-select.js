( $ => {

    $('.webform-submission-swim-lesson-selector-form').on( 'input', e => {
        const form = e.currentTarget
        if( 'undefined' !== MCFX ) {
            MCFX.Form.submit( form )
            console.log('form-submmited')
        }
    })
    

}) ( jQuery )
