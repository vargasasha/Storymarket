import { getBookByCategory } from './main-fetch';

const list = document.querySelector('.js-list');
const categoryTitle = document.querySelector('.js-category-books-title');
const listCategory = document.querySelector('.categories-list');
const allBooks = document.querySelector('.best-sellers');
const allBooksTitle = document.querySelector('.best-sellers-title');

listCategory?.addEventListener('click', handlerAllCategoryBooks);

export function handlerAllCategoryBooks(evt) {
  evt.preventDefault();

  if (
    evt.target.nodeName !== 'A' ||
    evt.target.textContent === 'All category'
  ) {
    return;
  }

  allBooksTitle.textContent = '';
  allBooks?.innerHTML = '';

  categoryBooks(evt.target.textContent);
}

function cardMarkup(array) {
  return array
    .map(
      ({ book_image, title, author, _id }) =>
        `<li class="category-item" id="${_id}">
        <a href="">
          <div class="book-card-wrap">
            <img src="${book_image}" alt="${title}" />
            <p class="card-up-text">quick view</p>
          </div>

            <h3 class="book-card-title">${title}</h3>
            <p class="book-card-author">${author}</p>
          </div>
        </a>
      </li>`
    )
    .join('');
}

function titleMarkup(title) {
  const wordArray = title.split(' ');
  const lastWord = wordArray[wordArray.length - 1];
  const firstTitle = wordArray.slice(0, wordArray.length - 1).join(' ') + ' ';

  categoryTitle.innerHTML = `<h2 class="category-title-begin">${firstTitle}<span class="category-title-end">${lastWord}</span></h2>`;
}

function categoryBooks(category) {
  titleMarkup(category);

  getBookByCategory(category).then(arr => {
    list.innerHTML = cardMarkup(arr);
  });
}
