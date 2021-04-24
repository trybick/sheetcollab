import { LayoutProps, Skeleton, SkeletonProps, Td, Tr } from '@chakra-ui/react';

interface Props extends SkeletonProps {
  numCells: number;
  numRows: number;
  height: string;
}

const SkeletonTableCell = ({ height }: { height?: LayoutProps['height'] }) => (
  <Td>
    <Skeleton height={height} />
  </Td>
);

const SkeletonTableRows = ({ numCells, numRows, height }: Props) => (
  <>
    {[...Array(numRows)].map(r => (
      <Tr key={r}>
        {[...Array(numCells)].map(c => (
          <SkeletonTableCell key={c} height={height} />
        ))}
      </Tr>
    ))}
  </>
);

export default SkeletonTableRows;
