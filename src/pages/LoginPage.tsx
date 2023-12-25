import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { PasswordInput } from '../components';
import { useInput } from '../hooks';

export const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const email = useInput('', 'Email', {
    isEmpty: true,
    minLength: 3,
    isEmail: true,
  });

  const password = useInput('', 'Password', {
    isEmpty: true,
    minLength: 6,
  });

  const isEmailValid =
    (email.isDirty && email.isEmpty) || (email.isDirty && email.isEmail);

  const onSubmit = () => {
    console.log(password.value, email.value);
    password.value = '';
    email.value = '';
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex h-screen font-serif">
      <div className="h-screen w-3/6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      <div className="flex w-3/6 flex-col justify-center px-44">
        <h2 className="mb-5 text-3xl font-bold">Login in</h2>
        <Input
          value={email.value}
          type="email"
          label={email.label}
          variant="bordered"
          isInvalid={isEmailValid}
          color={isEmailValid ? 'danger' : 'success'}
          errorMessage={isEmailValid ? 'Please enter a valid email' : ''}
          onValueChange={(e) => email.onChange(e)}
          onBlur={(e) => email.onBlur(e)}
          className="mb-5"
        />

        <PasswordInput
          props={password}
          isVisible={isVisible}
          toggleVisibility={toggleVisibility}
        />
        <Button
          isDisabled={!password.isValid || !email.isValid}
          className="w-36"
          color="primary"
          variant="ghost"
          type="submit"
          onClick={onSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
};
