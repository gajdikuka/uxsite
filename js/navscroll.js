window.onscroll = function() {
    var myNav = document.querySelector(".navbar");
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        myNav.classList.add("scrolled");
    } else {
        myNav.classList.remove("scrolled");
    }
};