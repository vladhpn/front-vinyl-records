import {
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  useDisclosure,
} from '@nextui-org/react';

import { Link } from 'react-router-dom';

import { CustomModal } from '../CustomModal';
import { Logo } from '../Logo';
import { FilterIcon, SearchIcon, UserIcon } from '../iconComponents';

export const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="container fixed left-0 right-0 z-20 h-20 bg-white py-5 ">
      <div className="flex items-center justify-between pb-2.5">
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
              <DropdownItem textValue="Register">
                <Link className="block" to="/register">
                  Register
                </Link>
              </DropdownItem>
              <DropdownItem textValue="Login">
                <Link className="block" to="/login">
                  Login
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <Divider orientation="horizontal" />
    </div>
  );
};
