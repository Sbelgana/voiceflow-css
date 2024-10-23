import { VoiceflowRuntime } from '@voiceflow/sdk-runtime';
import type { PartialDeep } from 'type-fest';

import { AssistantSettings, type RawAssistantSettings } from '@/dtos/AssistantSettings.dto';
import type { ChatConfig } from '@/dtos/ChatConfig.dto';

export const mergeAssistantSettings = async (
  config: ChatConfig,
  overrides: RawAssistantSettings
): Promise<AssistantSettings> => {
  const { versionID } = config;

  // fetch remote publishing config
  const runtime = new VoiceflowRuntime(config);

  // TODO: We will probably need to get settings from a new endpoint here..?
  const publishing = await runtime
    .getPublishing({ ...(versionID && { versionID }) })
    .then((x) => x as PartialDeep<AssistantSettings>)
    .catch((error) => {
      console.error(error);
      return null;
    });

  // TODO: Deep merge all inner objects
  return AssistantSettings.parse({
    interface: {
      ...publishing?.interface,
      ...overrides?.interface,
    },
    appearance: {
      ...publishing?.appearance,
      ...overrides?.appearance,
      footer: {
        ...publishing?.appearance,
        ...overrides?.appearance,
        // override show 'Powered By' setting
        showPoweredBy: publishing?.appearance?.footer?.showPoweredBy,
      },
    },
    security: {
      ...publishing?.security,
      ...overrides?.security,
    },

    // watermark can not be overridden with local config
    /* watermark: publishing?.watermark,
    feedback: publishing?.feedback,
    spacing: {
      ...publishing?.spacing,
      ...overrides?.spacing,
    },
    extensions: [...(publishing?.extensions ?? []), ...(overrides?.extensions ?? [])], */
  });
};
