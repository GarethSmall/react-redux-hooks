//@flow
import type { UniqueReduxStoreKey } from './ReduxProviderContext';
import type { Action, Store } from 'redux';
import warnOnCondition from './helpers/warnOnCondition';
import { useReduxStore } from './useReduxStore';
import React from 'react';

/**
 * TODO: add better typing
 */
export type ReduxStateFunction = (state : Object) => Object;

function defaultReduxStateFunction(state : Object) : Object {
  return state;
}

function subscribeToStore(store, selectFn, onChange) {
  let currentState;
  return () => {
    function handleChange() {
      let nextState = store.getState();
      if (nextState !== currentState) {
        currentState = nextState;
        onChange(nextState);
      }
    }

    let unsubscribe = store.subscribe(handleChange);

    handleChange();

    return unsubscribe;
  };
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
  /**
   * $FlowFixMe
   */
  const [state, setState] = React.useState(reduxStore.getState());
  /**
   * $FlowFixMe
   */
  React.useEffect(subscribeToStore(reduxStore, selectFn, setState), [reduxStore]);

  return selectFn(state);
}
