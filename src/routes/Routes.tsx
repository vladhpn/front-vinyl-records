import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import DetailsCardPage from '../pages/DetailsCardPage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import RegistrationPage from '../pages/RegistrationPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/record-details/:id',
        element: <DetailsCardPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegistrationPage />,
  },
]);

export default router;
