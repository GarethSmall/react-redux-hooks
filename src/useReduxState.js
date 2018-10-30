//@flow
import type { UniqueReduxStoreKey } from './ReduxProviderContext';
import type { Action, Store } from 'redux';
import warnOnCondition from './helpers/warnOnCondition';
import { useReduxStore } from './useReduxStore';
/**
 * $FlowFixMe
 */
import { useEffect } from 'react';

/**
 * TODO: add better typing
 */
export type ReduxStateFunction = (state : Object) => Object;

function defaultReduxStateFunction(state : Object) : Object {
  return state;
}

/**
 * Access state within a redux store housed in ReduxProviderContext
 * @param storeKey
 * @param stateFn
 * @returns {*}
 */
export function useReduxState(
  stateFn : ReduxStateFunction = defaultReduxStateFunction,
  storeKey? : UniqueReduxStoreKey,
) {
  /**
   * warn if a valid function does not exist, and fall back to default as not to break the workflow.
   */
  const isInvalid : boolean = stateFn == null || typeof stateFn !== 'function';
  warnOnCondition(
    isInvalid,
    'Invalid State Function: the state function must be a function.',
  );

  /**
   * Get a redux store based on a store key
   * @type {Store<*, Action>}
   */
  const reduxStore : Store<any, Action> = useReduxStore(storeKey);

  const selectFn = isInvalid ? defaultReduxStateFunction : stateFn;

  let currentState = reduxStore.getState();
  let selectedCurrentState = selectFn(currentState);
  /**
   * $FlowFixMe
   */
  useEffect(() => {
    function handleChange() {
      let nextState = reduxStore.getState();
      let selectedNextState = selectFn(nextState);
      if (selectedNextState !== selectedCurrentState) {
        currentState = nextState;
        selectedCurrentState = selectedNextState;
      }
    }

    let unsubscribe = reduxStore.subscribe(handleChange);

    handleChange();

    return unsubscribe;
  });

  return selectedCurrentState;
}
