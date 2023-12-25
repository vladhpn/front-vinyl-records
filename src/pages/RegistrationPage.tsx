import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';

export const RegistrationPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="flex h-screen font-serif">
      <div className="h-screen w-3/6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      <div className="flex w-3/6 flex-col flex-col justify-center px-44">
        <h2 className="mb-5 text-3xl font-bold">Create an account</h2>

        <Input
          className="mb-5"
          type="name"
          label="Name"
          placeholder="Enter your name"
          size="lg"
          isRequired
        />
        <Input
          className="mb-5"
          type="email"
          label="Email"
          placeholder="Enter your email"
          size="lg"
          isRequired
        />

        {/* <PasswordInput
          isVisible={isVisible}
          toggleVisibility={toggleVisibility}
        /> */}

        <Button className="w-36" color="primary" variant="ghost">
          Create an account
        </Button>
      </div>
    </div>
  );
};
