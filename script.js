document.addEventListener('DOMContentLoaded', function () {
    var parallax = document.querySelector('.parallax');

    document.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        parallax.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
    });
});
