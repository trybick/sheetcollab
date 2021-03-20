import { ChangeEvent, KeyboardEvent, useRef, useState } from 'react';
import {
  Box,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon, SmallCloseIcon } from '@chakra-ui/icons';
import { useFilterSheetsLazyQuery } from 'graphql/generated/hooks';

const SearchInput = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [filterSheets, { loading, data }] = useFilterSheetsLazyQuery({
    variables: { searchString: value },
  });
  console.log('data:', data);

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
    filterSheets({ variables: { searchString: value } });
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
          onKeyDown={handleKeyDown}
          placeholder="Search..."
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
