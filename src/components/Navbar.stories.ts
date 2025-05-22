import type { Meta, StoryObj } from '@storybook/react';
import Navbar, { NavbarProps } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    menuItems: [
      { label: 'home', link: '#' },
      { label: 'contato', link: '#' },

    ],
  } satisfies NavbarProps,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
