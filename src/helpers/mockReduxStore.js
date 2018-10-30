//@flow
import type { ReduxStoreMap } from '../ReduxProviderContext';
import type { Store, Action } from 'redux';
import { DefaultReduxStoreKey } from '../ReduxProviderContext';

export let mockReduxStoreMap : ?ReduxStoreMap = null;

function resetMockReduxStoreMap() {
  mockReduxStoreMap = null;
}

function setMockReduxStoreMap(storeMap : ReduxStoreMap) : () => void {
  mockReduxStoreMap = storeMap;
  return resetMockReduxStoreMap;
}

export const mockReduxStore = {
  createStore: (mockStore : Store<any, Action>) : (() => void) => {
    /* $FlowFixMe */
    return setMockReduxStoreMap({ [DefaultReduxStoreKey]: mockStore });
  },
  createStores: (storeMap : ReduxStoreMap) : (() => void) => {
    return setMockReduxStoreMap(storeMap);
  },
  teardown: resetMockReduxStoreMap,
};
