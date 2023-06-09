import { getTopBooks } from './main-fetch';

const allBooks = document.querySelector('.best-sellers');
let bookSize = getBookSize();

getTopBooks().then(function (response) {
  // console.log('top book', response);
  allBooks.innerHTML = renderMarkup(response);
  window.addEventListener('resize', function () {
    bookSize = getBookSize();
    allBooks.innerHTML = renderMarkup(response);
  });
});

function getBookSize() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1440) {
    return 5; // Великий розмір книжки
  } else if (screenWidth >= 768) {
    return 3; // Середній розмір книжки
  } else if (screenWidth >= 375) {
    return 1; // Малий розмір книжки
  }
}

function renderMarkup(data) {
  const renderedItems = data.map(obj => {
    const slicedBooks = obj.books.slice(0, bookSize); // Обрізання кількості книг
    const innerMarkup = slicedBooks.map(book => {
      return `
      <li class="best-sellers__item js-modal-item" id="${book._id}">
      <div class="card-wrap">
        <img class="best-sellers__img" src="${book.book_image}" alt="" />
        <p class="card">quick view</p>
        </div>
        <h3 class="best-sellers__name">${book.title}</h3>
        <p class="best-sellers__author">${book.author}</p>
      </li>
    `;
    });
    const mergedInnerMarkup = innerMarkup.join('');
    return `<div class="best-sellers__container">
              <p class="best-sellers__categori"> ${obj.list_name}</p>
              <ul class="best-sellers__list">
              ${mergedInnerMarkup}
              </ul>
              <div class="button-conteiner">
              <button class="best-sellers-button" data-category="${obj.list_name}">see more</button>
              </div>
            </div>`;
  });
  const finalMarkup = renderedItems.join('');
  return finalMarkup;
}
