import TextareaAutosize from 'react-textarea-autosize';

import type { CSS } from '@/styles';
import { styled } from '@/styles';

export const textareaUniqueStyles: CSS = {
  width: 'calc(100% - 42px)',
  borderRadius: '20px 0 0 20px',
  height: '42px',
  borderRightWidth: 0,
  fontFamily: '$default',
  fontSize: '$2',
};

export const textareaStyles: CSS = {
  boxSizing: 'border-box',
  border: '1px solid rgba(115,115,118,0.3)',
  backgroundColor: '$white',
  boxShadow: '0 1px 12px $shadow2',
  trans: ['border-color'],
  resize: 'none',
};

export const textareaFocusStyles: CSS = {
  border: '2px solid $primary',
};

export const Container = styled(TextareaAutosize, {
  ...textareaStyles,
  ...textareaUniqueStyles,
  // TODO use tokens
  padding: '11px $5 11px',
  color: '$black',

  '&:focus': {
    ...textareaFocusStyles,
    ...textareaUniqueStyles,
    outline: 'none',
  },

  '&::placeholder': {
    color: '$darkGrey',
  },
});
