//@flow
import React from 'react';
import type { ReduxStoreMap } from './ReduxProviderContext';
import { ReduxProviderContext } from './ReduxProviderContext';

/**
 * Return our global context
 * @returns {ReduxStoreMap}
 */
export function useReduxProviderContext() : ReduxStoreMap {
  /**
   * TODO: Fix this. This is an issue with flow react type defs
   * $FlowFixMe
   */
  return React.useContext(ReduxProviderContext);
}
