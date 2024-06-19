import Panorama from "../../data/data-restaurant-panorama";
import { panoHome } from "../templat/template-creator";

const Home = {
    async render() {
        return `    
    
        <div class="hero">
        <div class="transparant">
          <div class="hero-text">
            <div class="textIn">
                <h1>Experience the flavors of the world.</h1>
                <p class="Experience">Experience the flavors of the world is an invitation to embark on a gastronomic odyssey,<br>
                      savoring the diverse and delectable cuisines that define different cultures. From the aromatic spices of India to the delicate flavors of Japan, <br> each region offers a unique symphony of tastes and textures that will tantalize your palate and broaden your culinary horizons.</p>
            </div>
          </div>
       </div>
    </div>
    <div class="Browse">
        <h2>Browse Restaurants</h2>
    </div>
    <div tabindex="0" class="restaurant-list" id="restaurant-list"></div>
      `;
    },

    async afterRender() {
        const panorama = await Panorama.restoHomePage();
        const panoramaContainer = document.querySelector('.restaurant-list');
        panorama.forEach((pano) => {
            panoramaContainer.innerHTML += panoHome(pano);
        });
    },
};

export default Home;