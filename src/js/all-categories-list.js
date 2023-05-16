import { getTopBooks } from './main-fetch';

const allBooks = document.querySelector('.all-categories');

getTopBooks().then(function (response) {
  console.log('top book', response);
  allBooks.innerHTML = title(response) + book(response);
  // allBooks.innerHTML =
});

function title(arr) {
  return arr
    .map(({ list_name }) => {
      return `<p class="best-sellers-categori">${list_name}</p>`;
    })
    .join(' ');
}

function book(arr) {
  return arr.map(({ books }) => {
    return books
      .map(({ book_image, title, author }) => {
        return `
    <ul class="best-sellers-list">
      <li class="best-sellers-item">
        <img src="${book_image}" alt="" />
        <h3 class="best-sellers-name">${title}</h3>
        <p class="best-sellers-author">${author}</p>
      </li>
    </ul>`;
      })
      .join(' ');
  });
}
