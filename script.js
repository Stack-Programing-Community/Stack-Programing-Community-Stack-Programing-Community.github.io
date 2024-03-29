document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');
    var jumbotron = document.querySelector('.jumbotron');

    navbar.style.transition = "transform 0.5s";
    navbar.style.transform = "translateY(-100%)";

    var jumbotronVisible = false;

    function checkJumbotronVisibility() {
        var jumbotronRect = jumbotron.getBoundingClientRect();
        jumbotronVisible = (
            jumbotronRect.top >= -150 &&
            jumbotronRect.left >= -150 &&
            jumbotronRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            jumbotronRect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function toggleNavbar() {
        if (!jumbotronVisible) {
            navbar.style.transform = "translateY(0%)";
        } else {
            navbar.style.transform = "translateY(-100%)";
        }
    }

    window.addEventListener('scroll', function () {
        checkJumbotronVisibility();
        toggleNavbar();
    });

    checkJumbotronVisibility();
    toggleNavbar();
});