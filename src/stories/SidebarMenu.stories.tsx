import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import {
  SidebarMenu,
  SidebarMenuProps,
} from '../components/SidebarMenu/SidebarMenu';

export default {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
    },
  },
} as Meta;

const Template: StoryFn<SidebarMenuProps> = args => {
  const [isOpen, setIsOpen] = useState(args.isOpen || false);

  React.useEffect(() => {
    setIsOpen(args.isOpen || false);
  }, [args.isOpen]);

  return (
    <div>
      <SidebarMenu {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const SingleLevel = Template.bind({});
SingleLevel.args = {
  isOpen: false,
  items: [{ label: 'Home' }, { label: 'About' }, { label: 'Contact' }],
};

export const TwoLevels = Template.bind({});
TwoLevels.args = {
  isOpen: false,
  items: [
    { label: 'Dashboard' },
    {
      label: 'Settings',
      children: [{ label: 'Profile' }, { label: 'Security' }],
    },
    { label: 'Help' },
  ],
};
