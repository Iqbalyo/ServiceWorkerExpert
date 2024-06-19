import CONFIG from "./config";
const ENDPOINT_OF_API = {
  MAIN: `${CONFIG.Baseurl}/list`,
  DETAIL: (id) => `${CONFIG.Baseurl}/detail/${id}`,
};
export default ENDPOINT_OF_API;