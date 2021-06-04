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
    setToggle(false);
  } else {
    setToggle(true);
  }
}

function setToggle(value) {
  refs.toggle.checked = value;
}

function themeToggle() {
  const bodyClass = refs.body.classList;

  if (bodyClass.contains(LIGHT)) {
    bodyClass.replace(LIGHT, DARK);
    setStorageValue(DARK);
  } else if (bodyClass.contains(DARK)) {
    bodyClass.replace(DARK, LIGHT);
    setStorageValue(LIGHT);
  } else {
    bodyClass.add(DARK);
    setStorageValue(DARK);
  }
}

function setStorageValue(theme) {
  localStorage.setItem('bodyTheme', theme);
}
