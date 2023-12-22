/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';
import { ValidationProps, useValidation } from '..';

export const useInput = (
  initialValue: string,
  label: string,
  validations: ValidationProps,
) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = useCallback((e: string) => {
    setValue(e);
  }, []);

  const onBlur = (
    e:
      | React.FocusEvent<HTMLInputElement, Element>
      | React.FocusEvent<Element, Element>,
  ) => {
    setIsDirty(true);
  };

  return {
    value,
    isDirty,
    onChange,
    label,
    onBlur,
    ...valid,
  };
};
