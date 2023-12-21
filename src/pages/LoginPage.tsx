import { Button, Input } from '@nextui-org/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PasswordInput } from '../components';

interface IFormInput {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    alert(JSON.stringify(data));
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex h-screen font-serif">
      <div className="h-screen w-3/6 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-3/6 flex-col flex-col justify-center px-44">
        <h2 className="mb-5 text-3xl font-bold">Login in</h2>
        <Input
          className="mb-5"
          label="Email"
          placeholder="Enter your email"
          size="lg"
          isRequired
          // errorMessage={errors.email && 'Email is required'}
          {...register('email')}
        />

        <PasswordInput
          label="Password"
          register={register}
          isVisible={isVisible}
          toggleVisibility={toggleVisibility}
        />
        <Button className="w-36" color="primary" variant="ghost" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};
