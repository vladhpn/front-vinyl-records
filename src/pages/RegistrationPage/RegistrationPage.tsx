import { Button, Input, Link } from '@nextui-org/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PasswordInput } from '../../components';
import { useInput } from '../../hooks';

export const RegistrationPage = () => {
  const { t } = useTranslation();
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const navigate = useNavigate();

  const email = useInput('', 'Email', {
    isEmpty: true,
    minLength: 3,
    isEmail: true,
  });

  const name = useInput('', 'Name', {
    isEmpty: true,
    minLength: 3,
  });

  const password = useInput('', 'Password', {
    isEmpty: true,
    minLength: 6,
  });

  const isEmailValid =
    (email.isDirty && email.isEmpty) || (email.isDirty && email.isEmail);

  const toggleVisibilityPassword = () =>
    setIsVisiblePassword(!isVisiblePassword);

  const onSubmit = () => {
    console.log(password.value, email.value, name.value);
  };

  return (
    <div className="font-serif flex h-screen">
      <div className="h-screen w-3/6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="flex w-3/6 flex-col justify-center px-44">
        <h2 className="mb-5 text-3xl font-bold">
          {t('registrationPage.entry')}
        </h2>

        <Input
          value={name.value}
          type="email"
          label={t('authInput.name')}
          variant="bordered"
          isInvalid={name.isDirty && name.isEmpty}
          color={name.isDirty && name.isEmpty ? 'danger' : 'success'}
          errorMessage={
            name.isDirty && name.isEmpty && t('authInput.errorName')
          }
          onValueChange={(e) => name.onChange(e)}
          onBlur={(e) => name.onBlur(e)}
          className="mb-5"
        />

        <Input
          value={email.value}
          type="email"
          label={t('authInput.email')}
          variant="bordered"
          isInvalid={isEmailValid}
          color={isEmailValid ? 'danger' : 'success'}
          errorMessage={isEmailValid && t('authInput.errorEmail')}
          onValueChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          className="mb-5"
        />

        <PasswordInput
          props={password}
          isVisible={isVisiblePassword}
          toggleVisibility={toggleVisibilityPassword}
        />

        <div className="flex gap-5">
          <Button
            isDisabled={!password.isValid || !email.isValid || !name.isValid}
            className="w-36"
            color="primary"
            variant="ghost"
            type="submit"
            onClick={onSubmit}>
            {t('button.createAccount')}
          </Button>

          <Button color="primary" variant="solid" onClick={() => navigate('/')}>
            {t('button.toMain')}
          </Button>
        </div>
        <Link className="mt-4" href="/login">
          {t('registrationPage.haveAccountLink')}
        </Link>
      </div>
    </div>
  );
};
