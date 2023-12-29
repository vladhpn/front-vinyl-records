import { Input } from '@nextui-org/react';
import { FC } from 'react';
import { EyeFilledIcon, EyeSlashFilledIcon } from '../iconComponents';

type PasswordInputProps = {
  isVisible: boolean;
  toggleVisibility: React.MouseEventHandler<HTMLButtonElement>;
  props: {
    value: string;
    label: string;
    isEmpty?: boolean;
    minLength?: boolean;
    isEmail?: boolean;
    isDirty: boolean;
    onChange: (e: string) => void;
    onBlur: (
      e:
        | React.FocusEvent<HTMLInputElement, Element>
        | React.FocusEvent<Element, Element>,
    ) => void;
  };
};

export const PasswordInput: FC<PasswordInputProps> = ({
  isVisible,
  toggleVisibility,
  props,
}) => {
  return (
    <Input
      value={props.value}
      label={props.label}
      variant="bordered"
      isInvalid={
        (props.isDirty && props.isEmpty) || (props.isDirty && props.minLength)
      }
      color={
        (props.isDirty && props.isEmpty) || (props.isDirty && props.minLength)
          ? 'danger'
          : 'success'
      }
      errorMessage={
        (props.isDirty && props.isEmpty) || (props.isDirty && props.minLength)
          ? 'Min length 5 symbols'
          : ''
      }
      onValueChange={(e) => props.onChange(e)}
      onBlur={(e) => props.onBlur(e)}
      className="mb-5"
      size="lg"
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
