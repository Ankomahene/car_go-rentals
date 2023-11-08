'use client';
import { Avatar, Flex, Menu, Text, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import { BiLogOutCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { IoCarSportSharp, IoChevronDown } from 'react-icons/io5';
export function ProfileMenu() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton
          component={Flex}
          align="center"
          gap={8}
          variant="subtle"
          py="sm"
        >
          <Avatar src="" radius="xl" />
          <IoChevronDown />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>
          <Text lineClamp={1}>user@email.com</Text>
        </Menu.Label>
        <Menu.Item
          component={Link}
          href="/my-account/profile"
          leftSection={<CgProfile size="0.8rem" />}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          component={Link}
          href="/my-account/bookings"
          leftSection={<IoCarSportSharp size="0.8rem" />}
        >
          Bookings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          component="button"
          type="button"
          role="button"
          color="red"
          leftSection={<BiLogOutCircle size="1rem" />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
