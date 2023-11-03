import { Select } from '@mantine/core';
import React from 'react';

export const SelectRegion = () => {
  return (
    <Select
      label="Region"
      placeholder="Greater Accra"
      data={['Ashanti', 'Central', 'Eastern']}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  );
};
