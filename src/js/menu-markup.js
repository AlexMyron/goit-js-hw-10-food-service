import menuData from '../menu.json';
import template from '../templates/menu-template.hbs';

const menuMarkup = template(menuData);

const menuEl = document.querySelector('.js-menu');
menuEl.insertAdjacentHTML('beforeend', menuMarkup);
