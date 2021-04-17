import { Skeleton, SkeletonProps, Stack } from '@chakra-ui/react';

interface Props extends SkeletonProps {
  numRows: number;
  rowHeight: string;
}

const LoadingSkeleton = ({ numRows, rowHeight, ...rest }: Props) => (
  <Stack>
    {Array.from(Array(numRows).keys()).map(n => (
      <Skeleton height={rowHeight} key={n} {...rest} />
    ))}
  </Stack>
);

export default LoadingSkeleton;
