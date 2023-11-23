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
  LoadingOverlay,
} from '@mantine/core';
import Link from 'next/link';
import { GoogleButton } from './GoogleButton';
import { Logo } from '@/components/Navbar/Logo';
import classes from './Style.module.css';
import { useSignupForm } from '@/hooks/useSignupForm';
import { signupWithEmailPassword } from '@/services/auth.service';
import { useState } from 'react';
import { EmailConfirmation } from '@/components/EmailConfirmation';
import { toast } from 'react-toastify';

export function Signup() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const signupForm = useSignupForm();

  const handleSignup = async () => {
    const { email, password } = signupForm.values;

    setIsSubmitting(true);
    const { error } = await signupWithEmailPassword(email, password);

    if (error) {
      toast.error('Error Signing you up');
      setIsSubmitting(true);
    } else {
      setIsSubmitting(false);
      setIsSubmitted(true);

      toast.success(
        'Signup Successful. Please check your email to verify your account'
      );
    }
  };

  return (
    <>
      {isSubmitted ? (
        <EmailConfirmation email={signupForm.values.email} />
      ) : (
        <>
          <LoadingOverlay
            visible={isSubmitting}
            overlayProps={{ radius: 'sm', blur: 2 }}
          />
          <Box px="md" py="xl">
            <Paper className={classes.formPaper} withBorder>
              <Text size="lg" fw={500}>
                Welcome to <Logo />
              </Text>
              <GoogleButton />
              <Divider
                label="Or Continue with"
                labelPosition="center"
                my="md"
              />

              <form onSubmit={signupForm.onSubmit(() => handleSignup())}>
                <Stack>
                  <TextInput
                    label="Email"
                    placeholder="hello@cargo.com"
                    radius="md"
                    value={signupForm.values.email}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        'email',
                        event.currentTarget.value
                      )
                    }
                    error={signupForm.errors.email && signupForm.errors.email}
                  />

                  <PasswordInput
                    label="Password"
                    placeholder="Your password"
                    radius="md"
                    value={signupForm.values.password}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        'password',
                        event.currentTarget.value
                      )
                    }
                    error={
                      signupForm.errors.password && signupForm.errors.password
                    }
                  />
                  <PasswordInput
                    label="Confirm Password"
                    placeholder="Confirm Your password"
                    radius="md"
                    value={signupForm.values.confirmPassword}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        'confirmPassword',
                        event.currentTarget.value
                      )
                    }
                    error={
                      signupForm.errors.confirmPassword &&
                      signupForm.errors.confirmPassword
                    }
                  />

                  <Checkbox
                    label="I accept terms and conditions"
                    checked={signupForm.values.terms}
                    onChange={(event) =>
                      signupForm.setFieldValue(
                        'terms',
                        event.currentTarget.checked
                      )
                    }
                    error={signupForm.errors.terms && signupForm.errors.terms}
                  />
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
      )}
    </>
  );
}
