//@flow
import type {
  ReduxStoreMap,
  UniqueReduxStoreKey,
} from './ReduxProviderContext';
import { DefaultReduxStoreKey } from './ReduxProviderContext';
import throwErrorOnCondition from './helpers/throwErrorOnCondition';
import type { Action, Store } from 'redux';
import { useReduxProviderContext } from './useReduxProviderContext';

/**
 * Get a redux store from our provider context based on it's UniqueReduxStoreKey
 * If no value is provided we use our default store if one exists.
 * @param storeKey
 * @param reduxStoreMap
 * @returns {*}
 */
export function useReduxStore(
  storeKey? : UniqueReduxStoreKey = DefaultReduxStoreKey,
  reduxStoreMap? : ReduxStoreMap = useReduxProviderContext()
) : Store<any, Action> {
  const isInvalidKey : boolean =
    storeKey == null || !reduxStoreMap.hasOwnProperty(storeKey);
  throwErrorOnCondition(
    isInvalidKey,
    'Invalid Redux Store Key: No redux store was found using this store key.',
  );
  return reduxStoreMap[storeKey];
}
