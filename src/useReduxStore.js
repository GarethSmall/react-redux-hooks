//@flow
import type {
  ReduxStoreMap,
  UniqueReduxStoreKey,
} from './ReduxProviderContext';
import { DefaultReduxStoreKey } from './ReduxProviderContext';
import throwErrorOnCondition from './helpers/throwErrorOnCondition';
import type { Action, Store } from 'redux';
import { useReduxProviderContext } from './useReduxProviderContext';
import { mockReduxStoreMap } from './helpers/mockReduxStore';

/**
 * Get a redux store from our provider context based on it's UniqueReduxStoreKey
 * If no value is provided we use our default store if one exists.
 * @param storeKey
 * @param storeMap
 * @returns {*}
 */
export function useReduxStore(
  storeKey? : UniqueReduxStoreKey = DefaultReduxStoreKey,
  storeMap? : ReduxStoreMap = useReduxProviderContext(),
) : Store<any, Action> {
  let reduxStoreMap = storeMap;

  if (process.env.NODE_ENV === 'test' && mockReduxStoreMap != null) {
    reduxStoreMap = mockReduxStoreMap;
  }

  const isInvalidKey : boolean =
    storeKey == null ||
    reduxStoreMap == null ||
    !reduxStoreMap.hasOwnProperty(storeKey);

  throwErrorOnCondition(
    isInvalidKey,
    'Invalid Redux Store Key: No redux store was found using this store key.',
  );

  return reduxStoreMap[storeKey];
}
