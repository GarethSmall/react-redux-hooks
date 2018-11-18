//@flow
import React from 'react';
import type { Store, Action } from 'redux';
import {
  ReduxProviderContext,
  DefaultReduxStoreKey,
} from './ReduxProviderContext';
import type { ReduxStoreMap } from './ReduxProviderContext';
import warnOnCondition from './helpers/warnOnCondition';

/**
 * TODO: fix children types
 */
type Props =
  | $ReadOnly<{|
      children : any,
      store : Store<any, Action>,
    |}>
  | $ReadOnly<{|
      children : any,
      stores : ReduxStoreMap,
    |}>;


/**
 *
 * @param props
 * @returns {ReduxProvider.props.children|Props.children}
 * @constructor
 */
export function ReduxProvider(props : Props) {
  const { children } = props;

  let storeMap : ?ReduxStoreMap = null;

  if (props.store != null) {
    /* $FlowFixMe */
    storeMap = { [DefaultReduxStoreKey]: props.store };
  }

  if (props.stores != null) {
    storeMap = props.stores;
  }

  /**
   * If we don't have a store, there isn't much we can do with redux so we warn the user.
   */
  warnOnCondition(
    storeMap == null,
    'Invalid Props: ReduxProvider requires a valid store.',
  );
  /**
   * If we don't have a store map we return the children
   */
  return storeMap != null ? (
    <ReduxProviderContext.Provider value={storeMap}>
      {children}
    </ReduxProviderContext.Provider>
  ) : (
    children
  );
}
