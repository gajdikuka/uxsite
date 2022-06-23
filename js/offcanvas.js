(function() {
    'use strict'
    document.querySelector('#navbarSideCollapse').addEventListener('click', function() {
        document.querySelector('.navicon').classList.toggle('open');
        document.querySelector('.offcanvas-collapse').classList.toggle('open')

        small_navbar = document.querySelector('.small-navbar')
        if (document.querySelector('.navicon').classList.contains('open')) {
            small_navbar.classList.remove('small-scrolled-down');
            small_navbar.classList.add('small-scrolled-up');
        } else {}
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