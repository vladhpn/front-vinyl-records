import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  useDisclosure,
} from '@nextui-org/react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useHeaderVisibility } from '../../hooks';
import { CustomModal } from '../CustomModal';
import { Logo } from '../Logo';
import { FilterIcon, SearchIcon, UserIcon } from '../iconComponents';

export const Header = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { showHeader, show, hide } = useHeaderVisibility();

  const handleLoginClick = () => {
    hide();
    navigate('/login');
  };

  const handleRegisterClick = () => {
    hide();
    navigate('/register');
  };

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      hide();
    } else {
      show();
    }
  }, [hide, show]);

  return showHeader ? (
    <div className="container flex h-20 items-center justify-between">
      <Logo />
      <div className="flex  items-center justify-center gap-4">
        <Input
          startContent={
            <Button
              radius="full"
              isIconOnly
              className="flex items-center justify-center bg-transparent">
              <SearchIcon />
            </Button>
          }
          size="sm"
          radius="sm"
          variant="faded"
          className="w-96"
          isClearable
          classNames={{
            input: ['placeholder:text-default-700/50, text-md'],
            innerWrapper: 'text-textColor',
            inputWrapper: ['shadow-md'],
          }}
          placeholder="Type to search..."
        />
      </div>
      <div className="flex w-36 items-center justify-end gap-x-1">
        <CustomModal isOpen={isOpen} onOpenChange={onOpenChange} />
        <Button
          onPress={onOpen}
          radius="full"
          isIconOnly
          className="bg-transparent"
          aria-label="Filter">
          <FilterIcon />
        </Button>
        <Dropdown backdrop="opaque" placement="bottom-end">
          <DropdownTrigger>
            <Button
              radius="full"
              isIconOnly
              className="bg-transparent"
              aria-label="Filter">
              <UserIcon />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Link Actions">
            <DropdownItem textValue="Register" onPress={handleRegisterClick}>
              <Link className="block" to="/register">
                Register
              </Link>
            </DropdownItem>
            <DropdownItem textValue="Login" onPress={handleLoginClick}>
              <Link className="block" to="/login">
                Login
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  ) : null;
};
