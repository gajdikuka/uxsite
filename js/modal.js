(function() {
    'use strict'
    var url = window.location.href;
    var msg = document.getElementById('success');
    if( url.search( 'success' ) > 0 ) {
        msg.style.display = "block";
    }
})()