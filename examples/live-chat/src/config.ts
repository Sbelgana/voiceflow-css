import { AssistantOptions, ChatConfig } from '@voiceflow/chat';

const IMAGE = 'https://picsum.photos/seed/1/200/300';
const AVATAR = 'https://picsum.photos/seed/1/80/80';

export const ASSISTANT: AssistantOptions = AssistantOptions.parse({
  title: 'Live Agent Demo (with new chat)',
  description: 'Demonstration of integrating Voiceflow with Intercom.',
  image: IMAGE,
  avatar: AVATAR,
});

export const CONFIG = ChatConfig.parse({
  verify: { projectID: '67168209f602ebb662152fbb' },
});
