import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import React from 'react';

export const NotRegisteredAlert = () => {
  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title="User Not Found "
      color="red"
      my="sm"
    >
      We{`'`}re sorry, but the login credentials provided do not match any
      existing user in our system. Please double-check your email and password
      and try again or Create a new Account if you do not have one
    </Alert>
  );
};
