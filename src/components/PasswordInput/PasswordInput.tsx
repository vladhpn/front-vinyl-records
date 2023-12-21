/* eslint-disable @typescript-eslint/no-explicit-any */
import { Input } from '@nextui-org/react';
import { FC } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { EyeFilledIcon, EyeSlashFilledIcon } from '..';

type PasswodrInputProps = {
  isVisible: boolean;
  toggleVisibility: React.MouseEventHandler<HTMLButtonElement>;
  label: Path<any>;
  register: UseFormRegister<any>;
};

export const PasswordInput: FC<PasswodrInputProps> = ({
  isVisible,
  toggleVisibility,
  label,
  register,
}) => {
  return (
    <Input
      {...register(label)}
      className="mb-5"
      label={label}
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
