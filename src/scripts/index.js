import '../styles/main.css';
import 'regenerator-runtime';
import App from './views/app';
import HeaderPage from './views/component/header';
import swRegister from './utils/sw-register';



document.addEventListener('DOMContentLoaded', () => {
  customElements.define('header-only', HeaderPage);
  const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#maincontent'),
  });

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  });
});

// Call toggleNavBar after the DOM is loaded



