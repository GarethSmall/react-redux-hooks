//@flow
import type { UniqueReduxStoreKey } from './ReduxProviderContext';
import type { Action, Store } from 'redux';
import throwErrorOnCondition from './helpers/throwErrorOnCondition';
import { bindActionCreators } from 'redux';
import type { ActionCreatorsMapObject } from 'redux';
import { useReduxStore } from './useReduxStore';

/**
 * Takes a map of actions and outputs bound actions
 * @param actions
 * @param storeKey
 * @returns {ActionCreatorsMapObject}
 */
export function useReduxActions(
  actions : ActionCreatorsMapObject = {},
  storeKey? : UniqueReduxStoreKey,
) : ActionCreatorsMapObject {
  /**
   * If we don't have any actions or our actions are not a map we throw an error
   */
  throwErrorOnCondition(
    actions == null || typeof actions !== 'object',
    'Invalid Actions Map: the actions[1] parameter must be an object.',
  );

  const reduxStore : Store<any, Action> = useReduxStore(storeKey);

  return bindActionCreators(actions, reduxStore.dispatch);
}
