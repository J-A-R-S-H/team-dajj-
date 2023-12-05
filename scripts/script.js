
// Slick Test for slide-test.html file
$(function () {
    $('.slides').slick({

    });
});


const startPage = document.querySelector(".start-page")
const parralaxPage = document.querySelector(".parralax-page")
const startButton = document.querySelector('.start-button')

startButton.addEventListener('click', () => {
    parralaxPage.style.visibility = 'visible';
    startPage.classList.add("reverse-scale")

    setTimeout(timeoutDisplay, 300)
})


function timeoutDisplay() {
    startPage.style.display = "none"
}