import { primaryGradient } from '@/const';
import { Text } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

export const Logo = () => {
  return (
    <Text
      fz="lg"
      fw="bold"
      variant="gradient"
      gradient={primaryGradient}
      component={Link}
      href="/"
    >
      CarGo Rentals
    </Text>
  );
};
