const list = document.querySelector('.support__list-box');
const buttonDown = document.querySelector('.support__button-down');
const buttonUp = document.querySelector('.support__button-up');

buttonDown.addEventListener('click', onClickDown);

function onClickDown(evt) {
    evt.preventDefault();

    list.style.height = '450px';
    buttonDown.style.display = 'none';
    buttonUp.style.display = 'flex';
}


buttonUp.addEventListener('click', onClickUp);

function onClickUp(evt) {
    evt.preventDefault();

    list.style.height = '292px';
    buttonUp.style.display = 'none';
    buttonDown.style.display = 'flex';
}