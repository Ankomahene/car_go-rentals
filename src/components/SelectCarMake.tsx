import { Select } from '@mantine/core';
import React from 'react';

export const SelectCarMake = () => {
  return (
    <Select
      label="Car Make"
      placeholder="All"
      data={['All', 'Toyota', 'Nissan']}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  );
};
