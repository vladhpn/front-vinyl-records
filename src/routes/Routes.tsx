import { createBrowserRouter } from 'react-router-dom';
import {
  DetailsCardPage,
  LayoutPage,
  LoginPage,
  MainPage,
  RegistrationPage,
} from '../pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
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
