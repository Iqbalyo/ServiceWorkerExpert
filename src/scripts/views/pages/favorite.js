import FavoriteRestaurantIdb from "../../data/favorite-restorant-idb";
import { panoHome } from "../templat/template-creator";

const Favorite = {
  async render() {
    return `
        <div class="fav">

        </div>
      `;
  },

  async afterRender() {
    const favi = document.querySelector('.fav');
    const pano = await FavoriteRestaurantIdb.getAllRestaurant();
    favi.innerHTML = panoHome(pano);
    if (pano.length === 0) {
     favi.innerHTML = '<div>Kosong</div>';
    } else {
        pano.forEach((pano) => {
            favi.innerHTML = panoHome(pano);
        });
    }
  },
};

export default Favorite;