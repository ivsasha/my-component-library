import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import { useState, useEffect } from 'react';
import { Input, InputProps } from '../components/Input/Input';

export default {
  title: 'Input/Input',
  component: Input,
  argTypes: { onChange: { action: 'changed' } },
} as Meta;

const Template: StoryFn<InputProps> = args => {
  const [value, setValue] = useState(args.value || '');

  useEffect(() => {
    setValue(args.value || '');
  }, [args.value]);

  return (
    <Input
      {...args}
      value={value}
      onChange={val => {
        setValue(val);
        args.onChange?.(val);
      }}
    />
  );
};

export const Text = Template.bind({});
Text.args = { type: 'text', clearable: true, value: 'Initial Text' };

export const Password = Template.bind({});
Password.args = { type: 'password', clearable: true, value: '' };

export const Number = Template.bind({});
Number.args = { type: 'number', clearable: false, value: '' };
