import { UseToastOptions } from '@chakra-ui/react';

export default {
  addSheet: {
    success: {
      title: 'Sheet added',
      status: 'success',
      duration: 5000,
      position: 'bottom-right',
      variant: 'left-accent',
    } as UseToastOptions,
    error: {
      title: 'There was an error with that request.',
      status: 'error',
      duration: 5000,
      position: 'bottom-right',
      variant: 'left-accent',
    } as UseToastOptions,
  },
};
