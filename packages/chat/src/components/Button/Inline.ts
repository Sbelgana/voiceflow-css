import { styled } from '@/styles';

import { ButtonVariant } from './constants';
import { Container, tag } from './styled';

export const InlineButton = styled(tag(Container, ButtonVariant.INLINE), {
  height: '$sm',
  color: '$primary',
  backgroundColor: '$fadedPrimary',

  '&:hover': {
    backgroundColor: '$lessFadedPrimary',
    color: '$darkPrimary',
  },
});
