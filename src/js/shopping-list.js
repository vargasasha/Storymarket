import { getTopBooks } from './main-fetch.js';

const drawList = async () => {
  const container = document.querySelector('.shopping-list');
  const data = await getTopBooks();

  if (
    !data ||
    data.length === 0 ||
    !data[0]?.books ||
    data[0].books.length === 0
  ) {
    container.innerHTML = `
      <div class="page-empty">
        <h2 class="empty-description">
          This page is empty, add some books and proceed to order.
        </h2>
        <img class="img-empty" src="./images/shopping-list/books.png" alt="books" />
      </div>
    `;
    return;
  }
  const amazonImg = document.querySelector('.amazon-link').getAttribute('src');
  const pageImg = document.querySelector('.page-link').getAttribute('src');
  const bookImg = document.querySelector('.book-link').getAttribute('src');

  const dynamicElements = data[0].books
    .slice(0, 3)
    .map(({ title, author, book_image, description, buy_links, list_name }) => {
      const links = `
        <div class="shopping-links">
          <a href="${buy_links[0].url}" rel="noopener noreferrer">
            <img class="amazon-link" src="${amazonImg}" alt="name" />
          </a>
          <a href="${buy_links[1].url}" rel="noopener noreferrer">
            <img class="page-link" src="${pageImg}" alt="page" />
          </a>
          <a href="${buy_links[2].url}" rel="noopener noreferrer">
            <img class="book-link" src="${bookImg}" alt="book" />
          </a>
        </div>
      `;

      return `
        <li class="shopping-card">
          <div class="shopping-cover">
            <img class="img-cover" src="${book_image}" alt="${title}" />
          </div>
          <div class="shopping-content">
          
            <button class="remove-button">
              <svg class="remove-icon" width="12" height="12">
                <use href="./images/shopping-list/remove.svg#icon-Icon"></use>
              </svg>
            </button>
            <div>
              <h2 class="shopping-title">${title}</h2>
              <p class="shopping-category">${list_name}</p>
              <p class="shopping-description">${description}</p>
            </div>
            <div class="shopping-footer">
              <p class="shopping-author">${author}</p>
              ${links}
            </div>
          </div>
        </li>
      `;
    })
    .join('');

  container.innerHTML = dynamicElements;

  const removeButtons = document.querySelectorAll('.remove-button');
  removeButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      removeBook(index);
    });
  });
};

const removeBook = index => {
  const container = document.querySelector('.shopping-list');

  const cards = container.querySelectorAll('.shopping-card');

  if (index >= 0 && index < cards.length) {
    const cardToRemove = cards[index];
    cardToRemove.remove();
  }
};

drawList();
