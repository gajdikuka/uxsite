document.addEventListener("DOMContentLoaded", function() {
    el_autohide = document.querySelector('.autohide');
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if (scroll_top <= last_scroll_top || scroll_top <= navbar_height * 3) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            } else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            document.querySelector('.offcanvas-collapse').classList.remove('open')
            document.querySelector('.navicon').classList.remove('open');
            last_scroll_top = scroll_top;
        });
    }

    small_navbar = document.querySelector('.small-navbar')
    small_navbar_height = small_navbar.offsetHeight;
    document.body.style.paddingTop = small_navbar_height + 'px';
    if (small_navbar) {
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if (small_navbar && !document.querySelector('.navicon').classList.contains('open')) {
                if (scroll_top <= last_scroll_top || scroll_top <= small_navbar_height * 3) {
                    small_navbar.classList.remove('small-scrolled-down');
                    small_navbar.classList.add('small-scrolled-up');
                } else {
                    small_navbar.classList.remove('small-scrolled-up');
                    small_navbar.classList.add('small-scrolled-down');
                }
                last_scroll_top = scroll_top;
            }
        });
    }
});