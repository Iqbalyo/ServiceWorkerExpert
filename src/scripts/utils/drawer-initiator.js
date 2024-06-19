const DrawerInitiator = {
  init({ button, drawer, content }) {
    // Check if drawer element exists before adding event listener
    if (!drawer) {
      console.error("Drawer element not found. Please provide a valid element.");
      return; // Exit if drawer is null
    }

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    if (drawer) { // Check again before accessing classList
      drawer.classList.toggle('open');
    }
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    if (drawer) { // Check again before accessing classList
      drawer.classList.remove('open');
    }
  },
};

export default DrawerInitiator;
