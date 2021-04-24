import { Skeleton, SkeletonProps, Stack } from '@chakra-ui/react';

interface Props extends SkeletonProps {
  numRows: number;
}

const SkeletonStack = ({ numRows, ...rest }: Props) => (
  <Stack>
    {[...Array(numRows)].map(i => (
      <Skeleton key={i} {...rest} />
    ))}
  </Stack>
);

export default SkeletonStack;
