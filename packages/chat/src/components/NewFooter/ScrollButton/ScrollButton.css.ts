import { style } from '@vanilla-extract/css';

import { COLORS } from '@/styles/colors';
import { transition } from '@/styles/transitions';

export const BUTTON_SIZE = 32;

export const scrollButton = style({
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  borderRadius: '50%',
  display: 'flex',
  flex: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${COLORS.NEUTRAL_LIGHT[100]}`,
  background: COLORS.white,
  color: COLORS.NEUTRAL_DARK[100],
  transition: transition(['color', 'scale']),
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      color: COLORS.NEUTRAL_DARK[600],
      scale: 1.1,
    },
    '&:active': {
      color: COLORS.NEUTRAL_DARK[800],
      scale: 0.8,
    },
  },
});

export const scrollIcon = style({
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
});
