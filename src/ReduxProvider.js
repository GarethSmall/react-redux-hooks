//@flow
import React from 'react';
import type { Node } from 'react';
import type { Store, Action } from 'redux';
import {
  ReduxProviderContext,
  DefaultReduxStoreKey,
} from './ReduxProviderContext';
import type { ReduxStoreMap } from './ReduxProviderContext';
import warnOnCondition from './helpers/warnOnCondition';

type StoreProps =
  | {
      store : Store<any, Action>,
    }
  | {
      stores : ReduxStoreMap,
    };

type Props = {
  children : Node | Node[],
} & StoreProps;

/**
 *
 * @param props
 * @returns {ReduxProvider.props.children|Props.children}
 * @constructor
 */
export function ReduxProvider(props : Props) {
  const { children } = props;

  /**
   * If we don't have a store, there isn't much we can do with redux so we warn the user.
   */
  warnOnCondition(
    this.props.store == null && this.props.stores == null,
    'Invalid Props: ReduxProvider requires a valid store.',
  );

  let storeMap : ?ReduxStoreMap = null;

  if (this.props.store != null) {
    /* $FlowFixMe */
    storeMap = { [DefaultReduxStoreKey]: this.props.store };
  }

  if (this.props.stores != null) {
    storeMap = this.props.stores;
  }

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
