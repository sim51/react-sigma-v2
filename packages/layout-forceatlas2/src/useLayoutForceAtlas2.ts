import { useLayoutFactory } from '@react-sigma/layout-core';
import forceAtlas2, { ForceAtlas2SynchronousLayoutParameters } from 'graphology-layout-forceatlas2';

/**
 * React hook that helps you to manage [force atlas2 layout](https://graphology.github.io/standard-library/layout-forceatlas2.html).
 *
 * ```typescript
 * const { positions, assign } = useLayoutForceAtlas2(...);
 *```
 * @category Hook
 */
export function useLayoutForceAtlas2(
  options: ForceAtlas2SynchronousLayoutParameters = {
    iterations: 100,
  },
) {
  return useLayoutFactory<ForceAtlas2SynchronousLayoutParameters>(forceAtlas2, options);
}
