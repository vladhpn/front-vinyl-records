import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { PasswordInput } from '../components';

export const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="font-serif flex h-screen">
      <div className="h-screen w-3/6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      <div className="flex w-3/6 flex-col flex-col justify-center px-44">
        <h2 className="mb-5 text-3xl font-bold">Login in</h2>
        <Input
          className="mb-5"
          type="email"
          label="Email"
          placeholder="Enter your email"
          size="lg"
          isRequired
        />

        <PasswordInput
          isVisible={isVisible}
          toggleVisibility={toggleVisibility}
        />

        <Button className="w-36" color="primary" variant="ghost">
          Login
        </Button>
      </div>
    </div>
  );
};
