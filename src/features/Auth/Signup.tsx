'use client';
import {
  Anchor,
  Box,
  Button,
  Divider,
  Group,
  Paper,
  Text,
  Checkbox,
  PasswordInput,
  Stack,
  TextInput,
} from '@mantine/core';
import Link from 'next/link';
import { GoogleButton } from './GoogleButton';
import { Logo } from '@/components/Navbar/Logo';
import classes from './Style.module.css';

export function Signup() {
  return (
    <>
      <Box px="md" py="xl">
        <Paper className={classes.formPaper} withBorder>
          <Text size="lg" fw={500}>
            Welcome to <Logo />
          </Text>
          <GoogleButton />
          <Divider label="Or Continue with" labelPosition="center" my="md" />

          <form>
            <Stack>
              <TextInput
                label="Email"
                placeholder="hello@cargo.com"
                radius="md"
              />

              <PasswordInput
                label="Password"
                placeholder="Your password"
                radius="md"
              />
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm Your password"
                radius="md"
              />

              <Checkbox label="I accept terms and conditions" />
            </Stack>

            <Group justify="space-between" mt="xl">
              <Anchor
                component={Link}
                href="/login"
                type="button"
                c="dimmed"
                size="xs"
              >
                Already have an account? Login
              </Anchor>
              <Button type="submit" radius="xl">
                Sign up
              </Button>
            </Group>
          </form>

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
        </Paper>
      </Box>
    </>
  );
}
