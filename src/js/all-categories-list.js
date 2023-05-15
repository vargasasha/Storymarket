import { getTopBooks } from './main-fetch';

getTopBooks().then(function (response) {
  console.log('top book', response);
});
