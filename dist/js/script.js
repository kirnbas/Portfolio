const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percents = document.querySelectorAll('.skills__progress-value');
const lines = document.querySelectorAll('.skills__progress-bar div');

percents.forEach( (item, index) => {
    lines[index].style.width = item.innerHTML;
});