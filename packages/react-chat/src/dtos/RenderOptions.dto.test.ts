/* eslint-disable xss/no-mixed-html */
import { vi } from 'vitest';

import { EMBEDDED_TARGET, RenderMode, RenderOptions } from './RenderOptions.dto';

describe('RenderOptions', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe('parse()', () => {
    it('should render in bubble mode by default', () => {
      const result = RenderOptions.parse(undefined);

      expect(result).toEqual({ mode: RenderMode.BUBBLE });
    });

    it('should render in embedded mode', () => {
      const renderOptions = {
        mode: RenderMode.EMBEDDED,
        target: Object.create(HTMLElement.prototype),
      };

      const result = RenderOptions.parse(renderOptions);

      expect(result).toEqual(renderOptions);
    });

    it('should try to find a target with a known name when in embedded mode', () => {
      const target = Object.create(HTMLElement.prototype);
      const getElementById = vi.spyOn(document, 'getElementById').mockImplementation(() => target);

      const result = RenderOptions.parse({ mode: RenderMode.EMBEDDED });

      expect(result).toEqual({ mode: RenderMode.EMBEDDED, target });
      expect(getElementById).toBeCalledWith(EMBEDDED_TARGET);
    });

    it('should fallback to bubble mode when a target is not provided', () => {
      const result = RenderOptions.parse({ mode: RenderMode.EMBEDDED });

      expect(result).toEqual({ mode: RenderMode.BUBBLE });
    });
  });
});
