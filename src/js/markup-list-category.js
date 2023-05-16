import { getCategoriesList } from './main-fetch';
const listCategory = document.querySelector('.categories-list');

function getMarkupAllCategory() {
  const markup =
    '<li><a href="./index.html" class="js-categ-link category__link-all current-category">All category</a></li>';
  listCategory.insertAdjacentHTML('afterbegin', markup);
}

getMarkupAllCategory();

async function getMarkupCategoryList() {
  const categoryList = await  getCategoriesList('category-list');
  const categoryArr = [];
  for (const { list_name } of categoryList) {
    categoryArr.push(list_name);
  }
  const markup = categoryArr
    .sort((a, b) => a.localeCompare(b))
    .map(
      item =>
        `<li class="category__item"><a href="" class="js-categ-link category__link">${item}</a></li>`
    )
    .join('');
  listCategory.insertAdjacentHTML('beforeend', markup);
}

getMarkupCategoryList();


