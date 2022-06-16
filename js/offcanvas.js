(function() {
    'use strict'
    document.querySelector('#navbarSideCollapse').addEventListener('click', function() {
        document.querySelector('.navicon').classList.toggle('open');
        document.querySelector('.offcanvas-collapse').classList.toggle('open')

    });
    document.querySelectorAll('.nav-link').forEach(function(item) {
        item.addEventListener('click', function() {
            if (document.querySelector('.offcanvas-collapse').classList.contains("open")) {
                document.querySelector('.offcanvas-collapse').classList.toggle('open')
                document.querySelector('.navicon').classList.toggle('open');
            }
        });
    })
})()