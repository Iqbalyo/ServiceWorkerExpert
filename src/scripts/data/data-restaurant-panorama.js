import ENDPOINT_OF_API from "../globals/endpoint";

class Panorama {
  static async restoHomePage() {
    const response = await fetch(ENDPOINT_OF_API.MAIN);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restoDetailPage(id) {
    const response = await fetch(ENDPOINT_OF_API.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
     
  }
}

export default Panorama;
