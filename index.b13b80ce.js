var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var c={id:e,exports:{}};return t[e]=c,o.call(c.exports,c,c.exports),c.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o),o("615fE");const c={openBurgerBtn:document.querySelector(".burger-menu"),closeBurgerBtn:document.querySelector(".mobile-menu__button"),burger:document.querySelector(".mobile-menu-container")};function l(){c.burger.classList.toggle("is-hidden")}function r(e){document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e);document.querySelectorAll('.common-toggle input[type="checkbox"]').forEach((function(t){t.checked="dark"===e}))}c.openBurgerBtn.addEventListener("click",l),c.closeBurgerBtn.addEventListener("click",l);const s=localStorage.getItem("theme");r(s||"light");document.querySelectorAll('.common-toggle input[type="checkbox"]').forEach((function(e){e.addEventListener("change",(function(e){e.target.checked?r("dark"):r("light")}),!1)}));var a=o("615fE");const i=document.querySelector(".js-list"),d=document.querySelector(".js-category-books-title"),u=document.querySelector(".categories-list"),m=document.querySelector(".best-sellers"),g=document.querySelector(".best-sellers-title");function b(e){!function(e){const t=e.split(" "),n=t[t.length-1],o=t.slice(0,t.length-1).join(" ")+" ";d.innerHTML=`<h2 class="category-title-begin">${o}<span class="category-title-end">${n}</span></h2>`}(e),(0,a.getBookByCategory)(e).then((e=>{i.innerHTML=e.map((({book_image:e,title:t,author:n,_id:o})=>`<li class="category-item" id="${o}">\n        <a href="">\n          <div class="book-card-wrap">\n            <img src="${e}" alt="${t}" />\n            <p class="card-up-text">quick view</p>\n          </div>\n         \n            <h3 class="book-card-title">${t}</h3>\n            <p class="book-card-author">${n}</p>\n          </div>\n        </a>\n      </li>`)).join("")}))}u.addEventListener("click",(function(e){if("A"!==e.target.nodeName||"All category"===e.target.textContent)return;e.preventDefault(),g.textContent="",m.innerHTML="",b(e.target.textContent)})),m.addEventListener("click",(function(e){if("best-sellers-button"!==e.target.className)return;g.textContent="",m.innerHTML="",b(e.target.dataset.category)}));a=o("615fE");const f=document.querySelector(".categories-list");f.insertAdjacentHTML("afterbegin",'<li><a href="./index.html" class="js-categ-link category__link-all current-category">All category</a></li>'),async function(){const e=await(0,a.getCategoriesList)("category-list"),t=[];for(const{list_name:n}of e)t.push(n);const n=t.sort(((e,t)=>e.localeCompare(t))).map((e=>`<li class="category__item"><a href="" class="js-categ-link category__link">${e}</a></li>`)).join("");f.insertAdjacentHTML("beforeend",n)}();a=o("615fE");const h=document.querySelector(".modal-backdrop"),y=document.querySelector(".modal-container");document.querySelector(".js-list").addEventListener("click",(async function(e){e.preventDefault();const t=e.target.closest(".category-item").id;try{!function({book_image:e,title:t,description:n,_id:o}){const c=l();function l(){return`               \n<div class="book-card__modal" data-modal>\n   <button class="book-card__close modal-book__btn" data-modal-close>X</button>\n  <img\n    class="book-card__img"\n    src="${e}"\n    width="375px"\n    height="468px"\n    alt="book__img"\n  />\n      <div class="book-card__about">\n      <h3 class="book-card__title">${t}</h3>\n      <p class="book-card__desc">\n       ${n}\n      </p>\n      <ul class="book-add__btn">\n        <li><button class="book-add__watched modal-book__btn" id=${o}>add to Watched</button></li>\n      </ul>\n    </div>\n  </div>\n  \n`}y.insertAdjacentHTML("beforeend",c);const r={closeModalBtn:document.querySelector("[data-modal-close]"),body:document.querySelector("body")};function s(){window.removeEventListener("keydown",i),r.body.style.overflow="",h.classList.remove("active"),r.closeModalBtn.removeEventListener("click",s),h.removeEventListener("click",a),y.innerHTML=""}function a(e){e.target===e.currentTarget&&s()}function i(e){const t="Escape";e.code===t&&s()}h.classList.toggle("active"),r.closeModalBtn.addEventListener("click",s),h.addEventListener("click",a),window.addEventListener("keydown",i),r.body.style.overflow="hidden"}(await(0,a.getBookById)(t))}catch(e){console.log(e)}}));a=o("615fE");const _=document.querySelector(".best-sellers");let k=p();function p(){const e=window.innerWidth;return e>=1440?5:e>=768?3:e>=375?1:void 0}function v(e){return e.map((e=>{const t=e.books.slice(0,k).map((e=>`\n      <li class="best-sellers__item">\n        <img class="best-sellers__img" src="${e.book_image}" alt="" />\n        <h3 class="best-sellers__name">${e.title}</h3>\n        <p class="best-sellers__author">${e.author}</p>\n      </li>\n    `)).join("");return`<div class="best-sellers__container">\n              <p class="best-sellers__categori"> ${e.list_name}</p>\n              <ul class="best-sellers__list">\n              ${t}\n              </ul>\n              <div class="button-conteiner">\n              <button class="best-sellers-button" data-category="${e.list_name}">see more</button>\n              </div>\n            </div>`})).join("")}(0,a.getTopBooks)().then((function(e){_.innerHTML=v(e)})),window.addEventListener("resize",(function(){k=p(),_.innerHTML=v(response)}));let L=document.querySelectorAll(".changeTheme");function E(e){document.querySelector('[title="theme"]').setAttribute("href",`sass/utils/_theme-${e}.scss`),L.forEach((e=>{e.style.display="block"})),document.querySelector(`[data-theme="${e}"]`).style.display="none",localStorage.setItem("theme",e)}L.forEach((e=>{e.addEventListener("click",(function(){E(this.dataset.theme)}))}));let w=localStorage.getItem("theme");null===w||"light"===w?E("light"):"dark"===w&&E("dark"),o("2xYNj");
//# sourceMappingURL=index.b13b80ce.js.map
