import { Link as RouterLink } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import { ROUTES } from 'helpers/routes/routeMap';
import MySheets from './MySheets';

const MyProfilePage = () => {
  return (
    <Box>
      <Box m="40px 80px" textAlign="right">
        <Button
          as={RouterLink}
          colorScheme="blue"
          size="sm"
          textAlign="right"
          to={ROUTES.ADD_SHEET}
        >
          Add New
        </Button>
      </Box>

      <MySheets />
    </Box>
  );
};

export default MyProfilePage;
