import { useEffect } from 'react';

export const useClearInputOnEsc = (handleClearInput: () => void) => {
  useEffect(() => {
    function clearOnEsc(event: KeyboardEvent) {
      event.key === 'Escape' && handleClearInput();
    }
    document.addEventListener('keydown', clearOnEsc, false);
    return () => {
      document.removeEventListener('keydown', clearOnEsc, false);
    };
  }, []);
};
