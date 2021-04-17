import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon, SmallCloseIcon } from '@chakra-ui/icons';
import { ROUTES } from 'helpers/routes/routeMap';

const SearchInput = () => {
  const history = useHistory();
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClearInput = () => {
    setValue('');
    inputRef.current?.focus();
  };

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    key === 'Enter' && onSearch();
    key === 'Escape' && handleClearInput();
  };

  const onSearch = () => {
    value && history.push(`${ROUTES.SEARCH}/${value}`);
  };

  return (
    <Box ml="22px">
      <InputGroup display="flex">
        <InputLeftElement>
          <Search2Icon color="gray" />
        </InputLeftElement>

        <Input
          border="2px solid gray"
          borderRadius="12px"
          fontSize="15px"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Find sheet music"
          ref={inputRef}
          value={value}
          variant="outline"
          width="320px"
        />

        {value && (
          <InputRightElement>
            <IconButton
              aria-label="Clear input"
              icon={<SmallCloseIcon />}
              onClick={handleClearInput}
              size="sm"
              variant="unstyled"
            />
          </InputRightElement>
        )}
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
