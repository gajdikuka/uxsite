(function() {
    'use strict'
    if( window.location.href.search( 'success' ) > 0 ) {
        var myModal = new bootstrap.Modal(document.getElementById('success'))
        myModal.show()
    }
})()