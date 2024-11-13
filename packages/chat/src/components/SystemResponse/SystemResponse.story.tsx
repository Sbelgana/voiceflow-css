import type { Meta, StoryObj } from '@storybook/react';

import EMPTY_IMAGE from '@/__fixtures__/empty-image.png';
import CODE_RESPONSE_FIXTURE from '@/__fixtures__/markdown/code-response.md?raw';
import { MOCK_IMAGE, VF_ICON } from '@/fixtures';

import { FeedbackButtonVariant } from '../FeedbackButton/FeedbackButton.interface';
import type { MessageProps } from '.';
import { SystemResponse } from '.';

type Story = StoryObj<typeof SystemResponse>;

const CARD_IMAGE = MOCK_IMAGE;
const TEXT_MESSAGE: MessageProps = {
  type: 'text',
  text: 'Lorem ipsum dolor sit amet consectetur voluptas perspiciatis est quis dolores',
};
const CARD: MessageProps = {
  type: 'card',
  title: 'Card Message',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!',
  image: CARD_IMAGE,
};

const meta: Meta<typeof SystemResponse> = {
  title: 'Components/Chat/SystemResponse',
  component: SystemResponse,
  args: {
    timestamp: Date.now(),
    avatar: VF_ICON,
    isLast: true,
  },
  argTypes: {
    timestamp: {
      control: { type: 'date' },
    },
  },
  excludeStories: ['RawTemplate'],
  render: (args) => <SystemResponse {...args} />,
};

export default meta;

export const SimpleText: Story = {
  args: {
    avatar: EMPTY_IMAGE,
    messages: [{ type: 'text', text: 'Lorem ipsum dolor' }],
  },
};

export const SimpleTextWithoutAvatar: Story = {
  args: {
    messages: [{ type: 'text', text: 'Lorem ipsum dolor' }],
  },
};

export const TypingState: Story = {
  args: {
    avatar: EMPTY_IMAGE,
    messages: [{ type: 'text', text: 'Lorem ipsum dolor', delay: 10000 }],
    isLast: true,
  },
};

export const WrappingText: Story = {
  args: {
    messages: [{ type: 'text', text: 'consecteturaconsecteturaconsecteturaconsecteturaconsecteturaconsectetura' }],
  },
};

export const CodeResponse: Story = {
  args: {
    avatar: EMPTY_IMAGE,
    messages: [{ type: 'text', text: CODE_RESPONSE_FIXTURE }],
  },
};

export const MultilineText: Story = {
  args: {
    messages: [TEXT_MESSAGE],
  },
};

export const ActionableText: Story = {
  args: {
    messages: [TEXT_MESSAGE, TEXT_MESSAGE, TEXT_MESSAGE],
    isLast: true,
    actions: [
      { request: {} as any, name: 'Button One' },
      { request: {} as any, name: 'Button Two' },
      { request: {} as any, name: 'Button Three' },
    ],
  },
};

export const Image: Story = {
  args: {
    messages: [{ type: 'image', url: CARD_IMAGE }],
  },
};

export const Card: Story = {
  args: {
    messages: [CARD],
  },
};

export const ActionableCard: Story = {
  args: {
    messages: [
      {
        ...CARD,
        actions: [
          { request: {} as any, name: 'First Button' },
          { request: {} as any, name: 'Second Button' },
          { request: {} as any, name: 'Third Button' },
        ],
      },
    ],
  },
};

export const Carousel: Story = {
  args: {
    avatar: EMPTY_IMAGE,
    messages: [
      {
        type: 'carousel',
        cards: [
          {
            title: 'First Card',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!',
            image: CARD_IMAGE,
            actions: [
              { request: {} as any, name: 'First Button' },
              { request: {} as any, name: 'Second Button' },
              { request: {} as any, name: 'Third Button' },
            ],
          },
          {
            title: 'Second Card',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            image: CARD_IMAGE,
            actions: [
              { request: {} as any, name: 'First Button' },
              { request: {} as any, name: 'Second Button' },
            ],
          },
          {
            title: 'Third Card',
            description: 'Lorem ipsum dolor sit amet',
            image: CARD_IMAGE,
          },
        ],
      },
    ],
  },
};

export const Multiple: Story = {
  args: {
    messages: [CARD, TEXT_MESSAGE],
  },
};

export const MultipleWithFeedback: Story = {
  args: {
    feedback: {
      onClick: () => null,
    },
    isLast: true,
    messages: [CARD, TEXT_MESSAGE],
  },
};

export const PreviousMultipleWithFeedback: Story = {
  args: {
    feedback: {
      onClick: () => null,
      variant: FeedbackButtonVariant.PREVIOUS_RESPONSE,
    },
    isLast: false,
    messages: [CARD, TEXT_MESSAGE],
  },
};
