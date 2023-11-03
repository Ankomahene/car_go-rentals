import { Select } from '@mantine/core';
import React from 'react';

export const SelectCountry = () => {
  return (
    <Select
      label="Country"
      placeholder="Ghana"
      data={['Ghana', 'USA', 'Nigeria']}
      searchable
      nothingFoundMessage="Nothing Found"
    />
  );
};
