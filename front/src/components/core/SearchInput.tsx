import { ChangeEvent, useRef, useState } from 'react';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon, SmallCloseIcon } from '@chakra-ui/icons';
import { useClearInputOnEsc } from 'helpers/hooks/useClearOnEsc';
import { useFilterSheetsQuery } from 'graphql/generated/hooks';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClearInput = () => {
    setValue('');
    inputRef.current?.focus();
  };

  useClearInputOnEsc(handleClearInput);

  const search = () => {
    const { data, loading } = useFilterSheetsQuery({ variables: { searchString: value } });
    console.log('data:', data);
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
          onChange={handleChange}
          placeholder="Search for a song"
          ref={inputRef}
          value={value}
          variant="outline"
          width="290px"
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
