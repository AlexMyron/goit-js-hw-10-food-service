export const refs = {
  toggle: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

refs.toggle.addEventListener('change', switchTheme);
storeBodyTheme();

function storeBodyTheme() {
  const currentTheme = localStorage.getItem('bodyTheme') || LIGHT;
  refs.body.classList.add(currentTheme);
  setToggle(currentTheme === DARK);
}

function setToggle(value) {
  refs.toggle.checked = value;
}

function switchTheme(e) {
  const bodyClass = refs.body.classList;
  const lightTheme = e.target.checked;

  if (lightTheme) {
    bodyClass.replace(LIGHT, DARK);
    setStorageValue(DARK);
  } else {
    bodyClass.replace(DARK, LIGHT);
    setStorageValue(LIGHT);
  }
}

function setStorageValue(theme) {
  localStorage.setItem('bodyTheme', theme);
}
