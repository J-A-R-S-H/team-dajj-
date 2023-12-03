
// Slick Test for slide-test.html file
$(function () {
    $('.slides').slick({

    });
});


const startPage = document.querySelector(".start-page")
const parralaxPage = document.querySelector(".parralax-page")
const startButton = document.querySelector('.start-button')

startButton.addEventListener('click', () => {
    startPage.style.display = 'none';
    parralaxPage.style.visibility = 'visible';
})
