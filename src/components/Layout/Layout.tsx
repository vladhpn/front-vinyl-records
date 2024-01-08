import { Outlet } from 'react-router-dom';
import { Header } from '../Header';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <div className="pt-24">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
