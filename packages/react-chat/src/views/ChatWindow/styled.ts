import Chat from '@/components/Chat';

import { styled } from '../../../setup';

export const ChatWindowContainer = styled('div', {
  height: '100%',

  [`& ${Chat.Container}`]: {
    height: '100%',
  },
});
