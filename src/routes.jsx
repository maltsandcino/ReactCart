import App from './App';
import Home from './Home';
import Cart from './Cart';
import Store from './Store';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'cart', element: <Cart /> },
      { path: 'store', element: <Store />},
    ],
  },
];

export default routes