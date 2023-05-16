import { getTopBooks } from './main-fetch';

const allBooks = document.querySelector('.all-categories');

getTopBooks().then(function (response) {
  console.log('top book', response);
  allBooks.innerHTML = renderMarkup(response);
});

function renderMarkup(data) {
  const renderedItems = data.map(obj => {
    const innerMarkup = obj.books.map(book => {
      return `
      <li class="best-sellers-item">
        <img src="${book.book_image}" alt="" />
        <h3 class="best-sellers-name">${book.title}</h3>
        <p class="best-sellers-author">${book.author}</p>
      </li>
    `;
    });
    const mergedInnerMarkup = innerMarkup.join('');
    return `<div>
              <p> ${obj.list_name}</p>
              <ul class="best-sellers-list">
              ${mergedInnerMarkup}
              </ul>
              <button>see more</button>
            </div>`;
  });
  const finalMarkup = renderedItems.join('');
  return finalMarkup;
}
