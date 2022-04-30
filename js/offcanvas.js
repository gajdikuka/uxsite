(function() {
    'use strict'
    document.querySelector('#navbarSideCollapse').addEventListener('click', function() {
        document.querySelector('.navicon').classList.toggle('open');
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    });
})()