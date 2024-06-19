import CONFIG from "../../globals/config";

const panoHome = (pano) => `

<div class="restaurant-item">
<a href="/#/detailRestorant/${pano.id}"><h2>${pano.name}</h2></a>
  <img src="${CONFIG.imageMedium + pano.pictureId}" alt="gambar-pano ${pano.pictureId}">
  <p>City : ${pano.city}</p>
    <p>Ratting : ${pano.rating}⭐️</p>
    <p>${pano.description}</p><p></p>
</div>

`;

const detailPano = (panos) => `
  
  <div class="container">
    <div class="imageDetail">
      <img class="pic" src="${CONFIG.imageMedium + panos.pictureId}" alt="gambar-pano ${panos.pictureId}">
    </div>
    <a href="/favorite">Favorite</a>
    <h2 class="name">${panos.name}</h2>
    <div class="detail">
      <p>Ratting : ${panos.rating}⭐️</p>
      <p>City : ${panos.city}</p>
    </div>
      
      <h2 class="desk">Deskripsi</h2>
      <p class="desk">${panos.description}</p>
  
    <div class="menu">
      <div class="menuIn">
        <h4>menu makanan</h4>
        <p>
          ${panos.menus.foods.map(food => `<li>${food.name}</li>`).join("")}
        </p>
      </div>
      <div class="menuMinuman">
        <h4>menu minuman</h4>
        <p>
          ${panos.menus.drinks.map(drink => `<li>${drink.name}</li>`).join("")}
        </p>
      </div>
    </div>
    <div class="rev">
    <h4>Customer Reviews</h4>
      ${panos.customerReviews.map(customerReviews =>
      `<div class="revin">
        <h5>${customerReviews.name}</h5>
        <p>${customerReviews.review}</p>
        <p>${customerReviews.date}</p>
      </div>
      `).join('')}
    </div>
  </div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this savorP" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this savorP" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
 
export { 
  detailPano,
  panoHome,
  createLikeButtonTemplate,
  createLikedButtonTemplate, };
