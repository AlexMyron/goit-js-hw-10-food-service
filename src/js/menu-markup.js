import menuData from '../menu.json';
import templFunc from '../templates/menu-template.hbs';
console.log(templFunc);
console.log(typeof templFunc);

const menuMarkup = templFunc(menuData);

const menuEl = document.querySelector('.js-menu');
menuEl.insertAdjacentHTML('beforeend', menuMarkup);
