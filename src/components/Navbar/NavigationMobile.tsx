'use client';
import { Burger, Center, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AuthButtons } from './AuthButtons';
import { Logo } from './Logo';
import { ThemeSwitcher } from './ThemeSwitcher';

export const NavigationMobile = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        size="xs"
        title={<Logo />}
        opened={opened}
        onClose={close}
        transitionProps={{
          transition: 'slide-right',
        }}
      >
        <AuthButtons />

        <Center hiddenFrom="sm" pos="fixed" bottom={0} w="90%" py={8}>
          <ThemeSwitcher />
        </Center>
      </Drawer>

      <Burger opened={opened} onClick={open} aria-label="Toggle navigation" />
    </>
  );
};
