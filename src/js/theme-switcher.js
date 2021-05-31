export const refs = {
  toggle: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

refs.toggle.addEventListener('change', themeToggle);
storeBodyTheme();

function storeBodyTheme() {
  const currentTheme = localStorage.getItem('bodyTheme');
  refs.body.classList.add(currentTheme);
  if (currentTheme === LIGHT) {
    refs.toggle.checked = false;
  } else {
    refs.toggle.checked = true;
  }
}

function themeToggle() {
  const bodyClass = refs.body.classList;

  if (bodyClass.contains(LIGHT)) {
    bodyClass.replace(LIGHT, DARK);
    localStorage.setItem('bodyTheme', DARK);
  } else if (bodyClass.contains(DARK)) {
    bodyClass.replace(DARK, LIGHT);
    localStorage.setItem('bodyTheme', LIGHT);
  } else {
    bodyClass.add(DARK);
    localStorage.setItem('bodyTheme', DARK);
  }
}
