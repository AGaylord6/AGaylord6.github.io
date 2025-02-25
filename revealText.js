// revealText.js
// Andrew Gaylord

document.addEventListener('scroll', function() {
    // get the id of the text about me
    const aboutText = document.getElementById('about-text');
    // check where we are scrolled on the screen
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // if we are scrolled past 70px, make the text visible
    if (scrollPosition > 70) {
        aboutText.style.opacity = 1;
    } else {
        aboutText.style.opacity = 0;
    }
});