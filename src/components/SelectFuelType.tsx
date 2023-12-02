import { optionsFilter } from '@/functions';
import { Select } from '@mantine/core';
import { ReactNode } from 'react';

const fuelTypes = [
  { label: 'Any', value: 'Any' },
  { label: 'Gasoline', value: 'Gasoline' },
  { label: 'Diesel', value: 'Diesel' },
  { label: 'LPG', value: 'LPG' },
  { label: 'CNG', value: 'CNG' },
  { label: 'Electric(EV)', value: 'Electric' },
];

interface Props {
  label?: ReactNode;
  value?: string;
  onChange?: (value: string | null) => void;
  required?: boolean;
  addAny?: boolean;
}

export const SelectFuelType = ({
  label,
  value,
  onChange,
  required,
  addAny,
}: Props) => {
  return (
    <Select
      width="100%"
      label={label || 'Fuel Type/EV'}
      placeholder="Gasoline"
      required={required}
      data={fuelTypes}
      value={value}
      onChange={onChange}
      searchable
      maxDropdownHeight={280}
      nothingFoundMessage="Nothing found"
      filter={optionsFilter}
    />
  );
};
