import { charityItems } from "./helpers/charity-items";

const list = document.querySelector('.support__list-box');
const buttonDown = document.querySelector('.support__button-down');
const buttonUp = document.querySelector('.support__button-up');


function markup(arr) {
    let num = 0;
        return arr
          .map(
            ({ title, url, img }, num) =>
              `<li class="support__item">0${
                num+1
              }<a href="${url}" target="_blank"><img class="support__icon" src='${img}' alt='${title}'></a></li>`
          )
          .join('');
    }
list.innerHTML = markup(charityItems);






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