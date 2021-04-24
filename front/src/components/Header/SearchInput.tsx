import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
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
        <Input
          border="2px solid gray"
          borderRadius="6px"
          fontSize="15px"
          height="42px"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Find sheet music"
          ref={inputRef}
          value={value}
          variant="outline"
          width="300px"
        />

        {value && (
          <InputRightElement mr="50px">
            <IconButton
              aria-label="Clear input"
              cursor="default"
              icon={<SmallCloseIcon />}
              onClick={handleClearInput}
              size="sm"
              variant="unstyled"
            />
          </InputRightElement>
        )}

        <InputRightAddon cursor="pointer" height="42px">
          <Search2Icon color="gray" onClick={onSearch} />
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

export default SearchInput;
