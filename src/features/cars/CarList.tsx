import { Box, Flex } from '@mantine/core';
import { CarCard } from './CarCard';

export const CarList = () => {
  return (
    <Box w={{ base: '100%', md: 'calc(100% - 300px)' }}>
      <Flex wrap="wrap" justify="space-between" gap="md">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </Flex>
    </Box>
  );
};
