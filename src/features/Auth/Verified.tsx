'use client';
import { Alert, Button, Divider, Flex } from '@mantine/core';
import { IconChecks } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export const Verified = () => {
  return (
    <Flex mih="300px" justify="center" align="center">
      <Alert
        icon={<IconChecks size="1rem" />}
        title="User Verified"
        color="green"
        w={{ base: '90%', md: '60%' }}
      >
        Your Account has been confirmed. You can login
        <Divider my="lg" />
        <Button component={Link} href="/login">
          Login
        </Button>
      </Alert>
    </Flex>
  );
};
