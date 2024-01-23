import { Input } from '@nextui-org/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { EyeFilledIcon, EyeSlashFilledIcon } from '../iconComponents';
import { PasswordInputProps } from './type';

export const PasswordInput: FC<PasswordInputProps> = ({
  isVisible,
  toggleVisibility,
  props,
}) => {
  const { t } = useTranslation();

  return (
    <Input
      value={props.value}
      label={t('input label password')}
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
          ? t('error password message')
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
