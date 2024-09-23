import chroma from 'chroma-js';

export const PRIMARY = '#397dff';
export const WARN = '#db1b42';

export const SHADOWS = {
  shadow1: 'rgba(0,0,0,0.01)',
  shadow2: 'rgba(0,0,0,0.02)',
  shadow3: 'rgba(0,0,0,0.03)',
  shadow4: 'rgba(0,0,0,0.04)',
  shadow6: 'rgba(0,0,0,0.06)',
  shadow8: 'rgba(0,0,0,0.08)',
  shadow12: 'rgba(0,0,0,0.12)',
  shadow16: 'rgba(0,0,0,0.16)',

  surfaceZ1Light:
    '0px 1px 3px 1px rgba(22, 26, 30, 0.01), 0px 4px 8px -6px rgba(22, 26, 30, 0.08), 0px 1px 5px -4px rgba(22, 26, 30, 0.08), 0px 0px 0px 1px rgba(22, 26, 30, 0.04), 0px 1px 0px 0px rgba(22, 26, 30, 0.02)',
};

export const createPrimaryColors = (primary: string) => ({
  // TODO: How do I calculate these to match the styleguide ??
  primary,
  darkPrimary: chroma(primary).darken(2).hex(),
  darkerPrimary: chroma(primary).darken(3).hex(),
  fadedPrimary: chroma(primary).brighten(2).alpha(0.25).hex(),
  lessFadedPrimary: chroma(primary).brighten(1).alpha(0.35).hex(),
  leastFadedPrimary: chroma(primary).alpha(0.4).hex(),
});

export const PALETTE = {
  black: 'rgba(0,0,0,0.9)',
  white: '#fff',
  lightGrey: '#f4f4f4',
  medGrey: '#dfdfdf',
  darkGrey: '#737376',
  blue: PRIMARY,
  warn: WARN,
  darkWarn: chroma(WARN).darken(0.25).hex(),
  ...createPrimaryColors(PRIMARY),

  ...SHADOWS,
};
