let changeThemeButtons = document.querySelectorAll('.changeTheme');
const check = document.querySelector('.toggle-theme');
const body = document.querySelector('body');
const allCategoryBlock = document.querySelector('best-sellers');

changeThemeButtons.forEach(button => {
  button.addEventListener('click', function () {
    let theme = this.dataset.theme;
    applyTheme(theme);
  });
});

function applyTheme(themeName) {
  changeThemeButtons.forEach(button => {
    button.style.display = 'block';
  });

  localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme');

if (activeTheme === null || activeTheme === 'light') {
  applyTheme('light');
} else if (activeTheme === 'dark') {
  applyTheme('dark');
}

check.addEventListener('click', onStyle);

function onStyle(evt) {
  const currentTheme = localStorage.getItem('theme');
  console.log(currentTheme);
  console.log(evt);

  if (currentTheme === null || currentTheme === 'light') {
      body.classList.add('global-dark-theme');
      allCategoryBlock.classList.add('global-dark-theme');
  } else if (currentTheme === 'dark') {
      body.classList.remove('global-dark-theme');
       allCategoryBlock.classList.remove('global-dark-theme');
  }
}
