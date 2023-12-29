import { NextUIProvider } from '@nextui-org/react';
import { lazy } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// const Header = lazy(() => import('./components/Header/Header'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));

function App() {
  const navigate = useNavigate();
  return (
    <>
      <NextUIProvider navigate={navigate}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Route>
        </Routes>
      </NextUIProvider>
    </>
  );
}

export default App;
