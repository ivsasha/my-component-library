import { Toast, ToastProps } from '../components/Toast/Toast';
import React, { useState, useEffect } from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Feedback/Toast',
  component: Toast,
} as Meta;

const Template: StoryFn<ToastProps> = args => {
  const [isVisible, setIsVisible] = useState(true);
  const [toastProps, setToastProps] = useState(args);

  useEffect(() => {
    const typeMessages = {
      success: 'Operation completed successfully!',
      error: 'An error occurred!',
      info: 'Here is some information',
    };

    const message =
      args.message && args.message !== typeMessages[args.type || 'info']
        ? args.message
        : typeMessages[args.type || 'info'];

    setToastProps({
      ...args,
      message,
    });
    setIsVisible(true);
  }, [args]);

  if (!isVisible) {
    return <button onClick={() => setIsVisible(true)}>Show Toast</button>;
  }

  return <Toast {...toastProps} onClose={() => setIsVisible(false)} />;
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  duration: 3000,
};

export const Error = Template.bind({});
Error.args = {
  type: 'error',
  duration: 5000,
};

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  duration: 4000,
};

export const CustomMessage = Template.bind({});
CustomMessage.args = {
  message: 'This is a custom message',
  type: 'info',
  duration: 4000,
};
