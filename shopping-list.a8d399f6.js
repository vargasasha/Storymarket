!function(){function n(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=e.parcelRequired7c6;null==r&&((r=function(n){if(n in o)return o[n].exports;if(n in t){var e=t[n];delete t[n];var r={id:n,exports:{}};return o[n]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){t[n]=e},e.parcelRequired7c6=r);var i,s=r("bpxeT"),c=r("2TvXO"),a=r("f3isR"),l=(i=n(s)(n(c).mark((function e(){var o,t,r,i,s,l,u;return n(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=document.querySelector(".shopping-list"),n.next=4,(0,a.getTopBooks)();case 4:if((r=n.sent)&&0!==r.length&&(null===(o=r[0])||void 0===o?void 0:o.books)&&0!==r[0].books.length){n.next=8;break}return t.innerHTML='\n      <div class="page-empty">\n        <h2 class="empty-description">\n          This page is empty, add some books and proceed to order.\n        </h2>\n        <img class="img-empty" src="./images/shopping-list/books.png" alt="books" />\n      </div>\n    ',n.abrupt("return");case 8:i=document.querySelector(".amazon-link").getAttribute("src"),s=document.querySelector(".page-link").getAttribute("src"),l=document.querySelector(".book-link").getAttribute("src"),u=r[0].books.slice(0,3).map((function(n){var e=n.title,o=n.author,t=n.book_image,r=n.description,c=n.buy_links,a=n.list_name,p='\n        <div class="shopping-links">\n          <a href="'.concat(c[0].url,'" rel="noopener noreferrer">\n            <img class="amazon-link" src="').concat(i,'" alt="name" />\n          </a>\n          <a href="').concat(c[1].url,'" rel="noopener noreferrer">\n            <img class="page-link" src="').concat(s,'" alt="page" />\n          </a>\n          <a href="').concat(c[2].url,'" rel="noopener noreferrer">\n            <img class="book-link" src="').concat(l,'" alt="book" />\n          </a>\n        </div>\n      ');return'\n        <li class="shopping-card">\n          <div class="shopping-cover">\n            <img class="img-cover" src="'.concat(t,'" alt="').concat(e,'" />\n          </div>\n          <div class="shopping-content">\n          \n            <button class="remove-button">\n              <svg class="remove-icon" width="12" height="12">\n                <use href="./images/shopping-list/remove.svg#icon-Icon"></use>\n              </svg>\n            </button>\n            <div>\n              <h2 class="shopping-title">').concat(e,'</h2>\n              <p class="shopping-category">').concat(a,'</p>\n              <p class="shopping-description">').concat(r,'</p>\n            </div>\n            <div class="shopping-footer">\n              <p class="shopping-author">').concat(o,"</p>\n              ").concat(p,"\n            </div>\n          </div>\n        </li>\n      ")})).join(""),t.innerHTML=u,document.querySelectorAll(".remove-button").forEach((function(n,e){n.addEventListener("click",(function(){p(e)}))}));case 15:case"end":return n.stop()}}),e)}))),function(){return i.apply(this,arguments)}),p=function(n){var e=document.querySelector(".shopping-list").querySelectorAll(".shopping-card");n>=0&&n<e.length&&e[n].remove()};l()}();
//# sourceMappingURL=shopping-list.a8d399f6.js.map
