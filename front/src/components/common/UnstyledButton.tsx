import { Button, ButtonProps } from '@chakra-ui/react';
import { LinkProps } from 'react-router-dom';

const UnstyledButton = (props: ButtonProps & LinkProps) => (
  <Button
    {...props}
    _hover={{
      background: 'white',
      textDecor: 'underline',
    }}
    _active={{
      background: 'white',
    }}
    _focus={{
      outline: '0',
    }}
  >
    {props.children}
  </Button>
);

export default UnstyledButton;
