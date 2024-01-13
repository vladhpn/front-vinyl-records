export type PasswordInputProps = {
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
