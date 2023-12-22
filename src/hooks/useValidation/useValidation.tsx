import { useEffect, useState } from 'react';

export type ValidationProps = {
  isEmpty?: boolean;
  minLength?: number;
  isEmail?: boolean;
};

export const useValidation = (value: string, validations: ValidationProps) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLength, setMinLength] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (value: string) =>
    value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);

  useEffect(() => {
    if (!validations) return;
    if (validations.minLength) {
      value.length < validations.minLength
        ? setMinLength(true)
        : setMinLength(false);
    }
    if (validations.isEmpty) {
      value ? setIsEmpty(false) : setIsEmpty(true);
    }
    if (validations.isEmail) {
      validateEmail(value) ? setIsEmail(false) : setIsEmail(true);
    }
  }, [value, validations]);

  useEffect(() => {
    if (isEmpty || minLength || isEmail) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [isEmail, isEmpty, minLength]);

  return { isEmpty, minLength, isEmail, isValid };
};
