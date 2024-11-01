import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const CHAT_WIDTH = 380;
const MAX_CHAT_HEIGHT = 800;

export const LAUNCHER_MARGIN = 16;

export const widgetContainer = recipe({
  base: {
    position: 'fixed',
    inset: 0,
    top: 'auto !important',
    // TODO: Check that these vendor specific properties are correct
    fontSmooth: 'always',
    MozOsxFontSmoothing: 'always',
    /* '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale', */
    pointerEvents: 'auto',
    zIndex: 10000,
  },
  variants: {
    hidden: {
      true: {
        display: 'none',
      },
    },
    withChat: {
      true: {},
      false: {},
    },
  },
});

export const chatContainer = style({
  width: CHAT_WIDTH,
  maxHeight: MAX_CHAT_HEIGHT,

  selectors: {
    [`${widgetContainer.classNames.base} &`]: {
      position: 'absolute',
    },

    [`.${widgetContainer.classNames.variants.withChat.true} &`]: {
      opacity: 1,
      pointerEvents: 'auto',
      transform: 'translateY(0%)',
      transition: 'transform 300ms cubic-bezier(0, 0.95, 0.1, 1), opacity 150ms linear',
    },
    [`.${widgetContainer.classNames.variants.withChat.false} &`]: {
      opacity: 0,
      pointerEvents: 'none',
      transform: 'translateY(100%)',
      transition: 'transform 300ms cubic-bezier(0.85, 0, 0.6, 1), opacity 150ms linear',
    },
  },
});

export const launcherContainer = style({
  selectors: {
    [`${widgetContainer.classNames.base} &`]: {
      position: 'absolute',
    },
  },
});