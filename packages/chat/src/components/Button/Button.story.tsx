import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';

import Button from '.';
import { ButtonVariant } from './constants';

const TEST_ID = 'test-id';

type Story = StoryObj<typeof Button>;
const meta: Meta<typeof Button> = {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    variant: {
      options: Object.values(ButtonVariant),
      control: { type: 'radio' },
      defaultValue: ButtonVariant.PRIMARY,
    },
  },
  args: {
    children: 'Button Label',
    round: false,
    onClick: () => {
      alert('Button clicked');
    },
    testID: TEST_ID,
  },
};

export default meta;

export const Primary: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
  },
};

export const PrimaryHovered: Story = {
  args: {
    variant: ButtonVariant.PRIMARY,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByTestId(TEST_ID);

    await userEvent.hover(button);
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.SECONDARY,
  },
};

export const Inline: Story = {
  args: {
    variant: ButtonVariant.INLINE,
  },
};
