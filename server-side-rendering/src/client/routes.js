import App from './components/App';
import Home from './pages/Home';
import User from './pages/User.js';

export default {
  component: App,
  childRoutes: [
    { path: '/', component: Home },
    { path: '/users/:userId', component: User },
  ],
};
