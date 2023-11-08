'use client';

import {
  Anchor,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import Link from 'next/link';
import { GoogleButton } from './GoogleButton';
import classes from './Style.module.css';

export function Login(props: PaperProps) {
  return (
    <Box px="md" py="xl">
      <Paper className={classes.formPaper} withBorder {...props}>
        <Text size="lg" fw={500}>
          Welcome back,
        </Text>
        <GoogleButton />
        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@cargo.com"
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              radius="md"
            />
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component={Link}
              href="/signup"
              type="button"
              c="dimmed"
              size="xs"
            >
              Don{`'`}t have an account? Register
            </Anchor>
            <Button type="submit" radius="xl">
              Login
            </Button>
          </Group>

          <Group mt="xl">
            <Anchor
              component={Link}
              href="/providers"
              type="button"
              c="dimmed"
              size="xs"
            >
              Want to Rent your Car? Create Provider Account.
            </Anchor>
          </Group>
        </form>
      </Paper>
    </Box>
  );
}
