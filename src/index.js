import homeComponent from "./modules/home.js";
import menusComponent from "./modules/menus.js";
import contactComponent from "./modules/contact.js";

const home = document.querySelector('#home');
const menus = document.querySelector('#menus');
const contact = document.querySelector('#contact');
const content = document.querySelector('#content');

content.appendChild(homeComponent());

home.addEventListener('click', () => {
    clearContent();
    content.appendChild(homeComponent());
});

menus.addEventListener('click', () => {
    clearContent();
    content.appendChild(menusComponent());
});

contact.addEventListener('click', () => {
    clearContent();
    content.appendChild(contactComponent());
});

function clearContent() {
    content.innerHTML = '';
}