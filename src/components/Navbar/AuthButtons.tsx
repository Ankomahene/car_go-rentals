'use client';
import { primaryGradient } from '@/const';
import { useUserSessionContext } from '@/context/UserSessionContext';
import { Button, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { ProfileMenu } from '../ProfileMenu';

const excludedPaths = ['/login', '/signup'];

export const AuthButtons = () => {
  const smallScreen = useMediaQuery('(max-width: 991px)');
  const pathname = usePathname();
  const { session } = useUserSessionContext();

  return (
    <>
      {!excludedPaths.includes(pathname) && (
        <Group grow={smallScreen}>
          {session ? (
            <ProfileMenu />
          ) : (
            <>
              <Button component={Link} href="/login" variant="default">
                Log in
              </Button>
              <Button
                component={Link}
                href="/signup"
                variant="gradient"
                gradient={primaryGradient}
              >
                Sign up
              </Button>
            </>
          )}
        </Group>
      )}
    </>
  );
};
