import { SegmentedControl, Text } from '@mantine/core';

export const Transmission = () => {
  return (
    <>
      <Text my={16}>Transmission</Text>
      <SegmentedControl
        color="pink"
        radius="lg"
        data={[
          { value: 'Any', label: 'Any' },
          { value: 'Automatic', label: 'Automatic' },
          { value: 'Manual', label: 'Manual' },
        ]}
      />
    </>
  );
};
