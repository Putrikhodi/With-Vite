import Home from '../pages/home/Home';
import AboutPage from '../pages/about/about-page';
import Login from '../pages/auth/login/Login';

const routes = {
  '/': new Home(),
  '/about': new AboutPage(),
  '/login': new Login(),
};

export default routes;
