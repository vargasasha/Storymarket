import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/books/';

export async function getCategoriesList() {
  return (await axios.get(`${BASE_URL}category-list`)).data;
}

export async function getTopBooks() {
  return (await axios.get(`${BASE_URL}top-books`)).data;
}

export async function getBookByCategory(category) {
  return (await axios.get(`${BASE_URL}category?category=${category}`)).data;
}

export async function getBookById(id) {
  return (await axios.get(`${BASE_URL}${id}`)).data;
}

// getCategoriesList().then(function (response) {
//   console.log(response);
// });

// getTopBooks().then(function (response) {
//   console.log(response);
// });


// const categ = 'Audio Fiction';
// const id = '643282b1e85766588626a085';

// getBookByCategory(categ).then(function (response) {
//   console.log(response);
// });

// getBookById(id).then(function (response) {
//   console.log(response);
// });
