import { Link } from 'react-router-dom';
import { LogoIcon } from '../iconComponents/LogoIcon';

export const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className=" flex items-center font-extrabold text-darkBlue">
        <LogoIcon />
        <span className="pl-1 text-lg">vinylrecords</span>
      </Link>
    </div>
  );
};
