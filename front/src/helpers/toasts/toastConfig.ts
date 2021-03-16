import { UseToastOptions } from '@chakra-ui/react';

type ToastStatus = 'success' | 'error' | 'warning';

type ToastConfig = {
  [key: string]: {
    [key in ToastStatus]?: UseToastOptions;
  };
};

export default <ToastConfig>{
  addSheet: {
    success: {
      title: 'Sheet added',
      status: 'success',
      duration: 5000,
      position: 'bottom-right',
      variant: 'left-accent',
    },
    error: {
      title: 'There was an error with that request.',
      status: 'error',
      duration: 5000,
      position: 'bottom-right',
      variant: 'left-accent',
    },
  },
};
