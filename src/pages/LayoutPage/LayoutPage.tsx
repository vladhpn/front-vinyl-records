import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';

export const LayoutPage = () => {
  return (
    <div className="container">
      <Header />
      <div className="pt-24">
        <Outlet />
      </div>
    </div>
  );
};
