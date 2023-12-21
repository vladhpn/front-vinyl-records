import { Input } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "..";
import { FC } from "react";

type PasswodrInputProps = {
  isVisible: boolean;
  toggleVisibility: React.MouseEventHandler<HTMLButtonElement>;
};

export const PasswordInput: FC<PasswodrInputProps> = ({
  isVisible,
  toggleVisibility,
}) => {
  return (
    <Input
      className="mb-5"
      label="Password"
      placeholder="Enter your password"
      size="lg"
      isRequired
      type={isVisible ? 'text' : 'password'}
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="pointer-events-none text-2xl text-default-400" />
          ) : (
            <EyeFilledIcon className="pointer-events-none text-2xl text-default-400" />
          )}
        </button>
      }
    />
  );
};