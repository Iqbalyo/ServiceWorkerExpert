import UrlParser from "../../routes/url-parser";
import Panorama from "../../data/data-restaurant-panorama";
import { detailPano } from "../templat/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const detailRestorant = {
    async render() {
        return `
            
            <div id="restaurant" class="restaurant"></div>
            <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const panos = await Panorama.restoDetailPage(url.id);
        const savcontainer = document.querySelector('#restaurant');
        savcontainer.innerHTML = detailPano(panos);

        const restaurant = {
            id: panos.id,
            name: panos.name,
            city: panos.city,
            description: panos.description,
            pictureId: panos.pictureId,
        };

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: restaurant, // Pastikan restaurant didefinisikan di sini
        });
    },
};

export default detailRestorant;
