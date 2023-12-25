import { Link } from '@nextui-org/react';
import { LogoIcon } from '../iconComponents/LogoIcon';

export const Logo = () => {
  return (
    <div className="logo">
      <Link className=" font-extrabold text-darkBlue" href="#">
        <LogoIcon />
        <span className="pl-1 text-lg">vinylrecords</span>
      </Link>
    </div>
  );
};
