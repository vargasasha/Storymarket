import { getBookById } from './main-fetch';

const modalBackdropEl = document.querySelector('.modal-backdrop');
const modalContainerEl = document.querySelector('.modal-container');
const bookListEl = document.querySelector('.js-list');
const allBooksCategory = document.querySelector('.best-sellers');

bookListEl.addEventListener('click', onOpenModal);
allBooksCategory.addEventListener('click', onOpenModal);

async function onOpenModal(event) {
  event.preventDefault();

  // if (event.target.nodeName !== 'IMG') return;
  let bookId;

  if (event.target.closest('.js-modal-item').id) {
    bookId = event.target.closest('.js-modal-item').id;
  }

  try {
    const bookData = await getBookById(bookId);

    console.log(bookData);

    createMarkupModal(bookData);
  } catch (error) {
    console.log(error);
  }
}

function createMarkupModal({ book_image, title, author, description, _id }) {
  if (description === '') {
    description = 'No description';
  }

  const markup = mark();
  function mark() {
    return ` 
    <div class="modal-content"> 
    <div class="book-card__modal" data-modal>
   <button class="book-card__close modal-book__btn" data-modal-close>X</button>
  <img
    class="book-card__img"
    src="${book_image}"

    alt="book__img"
  />
      <div class="book-card__about">
      <h3 class="book-card__title">${title}</h3>
      <p class="book-card__author">${author}</p>
      <p class="book-card__desc">
       ${description}
      </p>
    </div>
  </div>

  <button class="book-add__watched modal-book__btn" id=${_id}>Add to shopping list</button>
      
   </div>           
`;
  }

  modalContainerEl.insertAdjacentHTML('beforeend', markup);

  const refs = {
    closeModalBtn: document.querySelector('[data-modal-close]'),
    body: document.querySelector('body'),
  };

  modalBackdropEl.classList.toggle('active');
  refs.closeModalBtn.addEventListener('click', onCloseModal);
  modalBackdropEl.addEventListener('click', onClickBackdropModalClose);
  window.addEventListener('keydown', inKeyDownEscModalClose);
  refs.body.style.overflow = 'hidden';

  function onCloseModal() {
    window.removeEventListener('keydown', inKeyDownEscModalClose);
    refs.body.style.overflow = '';
    modalBackdropEl.classList.remove('active');
    refs.closeModalBtn.removeEventListener('click', onCloseModal);
    modalBackdropEl.removeEventListener('click', onClickBackdropModalClose);
    modalContainerEl.innerHTML = '';
  }

  function onClickBackdropModalClose(event) {
    if (event.target === event.currentTarget) {
      onCloseModal();
    }
  }

  function inKeyDownEscModalClose(event) {
    const KEY_CODE_ESCAPE = 'Escape';

    if (event.code === KEY_CODE_ESCAPE) {
      onCloseModal();
    }
  }
}
