import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import React from 'react';

export const NotVerifiedAlert = () => {
  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title="User Account Not Confirmed"
      color="orange"
      my="sm"
    >
      Sorry! We are unable to log you in. Please check if your account is
      confirmed and try again
    </Alert>
  );
};
