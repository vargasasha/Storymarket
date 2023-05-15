import { getBookByCategory } from './main-fetch';

const list = document.querySelector('.js-list');
const listCategory = document.querySelector('.categories-list');

listCategory.addEventListener('click', handlerAllCategoryBooks);

function handlerAllCategoryBooks(evt) {
    evt.preventDefault();
    categoryBooks(evt.target.textContent);
}

function cardMarkup(array) {
  return array
    .map(
      ({ book_image, title, author, _id }) =>
        `<li id="${_id}"><a href=""><img src="${book_image}" alt="${title}"><h2>${title}</h2><p>${author}</p></a></li`
    )
    .join('');

}

function categoryBooks(category) {

  getBookByCategory(category).then(arr => {

    list.innerHTML = cardMarkup(arr);

  });
}