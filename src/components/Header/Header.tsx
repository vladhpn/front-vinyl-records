import { Button, Input, useDisclosure } from '@nextui-org/react';
import { Logo } from '../Logo';
import { CustomModal } from '../CustomModal';
import { FilterIcon, SearchIcon, UserIcon } from '../iconComponents';

export const Header = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="flex h-20 items-center justify-between">
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
        <Button
          radius="full"
          isIconOnly
          className="bg-transparent"
          aria-label="Filter">
          <UserIcon />
        </Button>
      </div>
    </div>
  );
};
