import { useHistory } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';
import { useAddSheetMutation } from 'graphql/generated/hooks';
import { AddSheetData, addSheetSchema } from 'helpers/forms/addSheetForm';
import toastConfig from 'helpers/toasts/toastConfig';
import { ROUTES } from 'helpers/routes/routeMap';

const AddSheetPage = () => {
  const history = useHistory();
  const toast = useToast();
  const { handleSubmit, errors, register } = useForm<AddSheetData>();
  const [login, { loading }] = useAddSheetMutation();

  const onSubmit: SubmitHandler<AddSheetData> = async values => {
    await login({ variables: values })
      .then(() => {
        history.push(ROUTES.HOME);
        toast(toastConfig.addSheet.success);
      })
      .catch(() => {
        toast(toastConfig.addSheet.error);
      });
  };

  return (
    <Box
      as="form"
      boxShadow="md"
      borderRadius="4px"
      m="100px auto 0"
      onSubmit={handleSubmit(onSubmit)}
      p={10}
      w="400px"
    >
      <FormControl isInvalid={!!errors.artist} isRequired>
        <FormLabel htmlFor="artist">Artist</FormLabel>
        <Input id="artist" name="artist" ref={register(addSheetSchema.artist)} autoFocus />
        <FormErrorMessage>{errors.artist?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.title} mt={4} isRequired>
        <FormLabel>Title</FormLabel>
        <Input id="title" name="title" ref={register(addSheetSchema.title)} />
        <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.year} mt={4}>
        <FormLabel>Year</FormLabel>
        <Input id="year" name="year" ref={register(addSheetSchema.year)} />
        <FormErrorMessage>{errors.year?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.notes} mt={4}>
        <FormLabel>Notes</FormLabel>
        <Input id="notes" name="notes" ref={register(addSheetSchema.notes)} />
        <FormErrorMessage>{errors.notes?.message}</FormErrorMessage>
      </FormControl>

      <Button isLoading={loading} mt="28px" type="submit" colorScheme="gray" w="100%">
        Save
      </Button>
    </Box>
  );
};

export default AddSheetPage;
