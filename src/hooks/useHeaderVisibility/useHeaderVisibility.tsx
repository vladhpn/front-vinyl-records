import { useState } from 'react';

export const useHeaderVisibility = () => {
  const [showHeader, setShowHeader] = useState(true);

  const show = () => {
    setShowHeader(true);
  };

  const hide = () => {
    setShowHeader(false);
  };

  return {
    showHeader,
    show,
    hide,
  };
};
