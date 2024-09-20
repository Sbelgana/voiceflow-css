import { style } from '@vanilla-extract/css';

import { newThemeVars } from '@/styles/new-theme.css';

export const resetStyle = style({
  border: 0,
  padding: 0,

  ':focus': {
    outline: 0,
  },

  ':hover': {
    cursor: 'pointer',
  },
});

export const containerStyle = style([
  resetStyle,
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 14px',
    borderRadius: newThemeVars.radius.sm,
    fontWeight: newThemeVars.font.weights.heavy,
    whiteSpace: 'nowrap',
    overflowWrap: 'anywhere',
  },
]);

export const secondaryButtonStyles = style([
  containerStyle,
  {
    height: newThemeVars.sizes.sm,
    border: '1px solid $fadedPrimary', // parameterize
    color: newThemeVars.colors.primary,
    backgroundColor: '#fff', // parameterize
    boxShadow: '0 1px 2px $shadow2',
    transition: 'border-color 150ms ease', // parameterize

    ':hover': {
      borderColor: newThemeVars.colors.primary,
    },
  },
]);
