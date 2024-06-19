const drawer = document.querySelector('.drawer');
const navBar = document.querySelector('.nav-bar');

drawer.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    navBar.classList.toggle('active');
  }
});