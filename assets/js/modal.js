var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.IZru');
var modalClose = document.querySelector('.modal-close');


modalBtn.addEventListener('click', function() {
    modalBg.classList.add('bg-active');
});

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active');
});