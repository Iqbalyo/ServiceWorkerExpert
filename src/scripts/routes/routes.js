import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import About from '../views/pages/aboutus';
import detailRestorant from '../views/pages/detailrestorant';



const routes = {
 '/': Home,
 '/favorite': Favorite,
 '/aboutus/:id': About,
 '/detailrestorant/:id': detailRestorant,

};
 
export default routes;
