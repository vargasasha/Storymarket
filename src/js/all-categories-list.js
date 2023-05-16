import { getTopBooks } from './main-fetch';

const allBooks = document.querySelector('.all-categories');

getTopBooks().then(function (response) {
  console.log('top book', response);
  allBooks.innerHTML = renderMarkup(response);
});

function renderMarkup(data) {
  const renderedItems = data.map(obj => {
    const innerMarkup = obj.books.map(book => {
      return `<ul class="best-sellers-list">
      <li class="best-sellers-item">
        <img src="${book.book_image}" alt="" />
        <h3 class="best-sellers-name">${book.title}</h3>
        <p class="best-sellers-author">${book.author}</p>
      </li>
    </ul>`;
    });
    const mergedInnerMarkup = innerMarkup.join('');
    return `<div>
              <h2> ${obj.list_name}</h2>
              ${mergedInnerMarkup}
            </div>`;
  });
  const finalMarkup = renderedItems.join('');
  return finalMarkup;
}

// function title(arr) {

// }

// function book(arr) {
//   return arr.map(({ books }) => {
//     return books
//       .map(({ book_image, title, author }) => {
//         return `
//     <ul class="best-sellers-list">
//       <li class="best-sellers-item">
//         <img src="${book_image}" alt="" />
//         <h3 class="best-sellers-name">${title}</h3>
//         <p class="best-sellers-author">${author}</p>
//       </li>
//     </ul>`;
//       })
//       .join(' ');
//   });
// }
