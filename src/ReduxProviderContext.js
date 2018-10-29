//@flow
import React from 'react';
/**
 * TODO: Fix this. This an issue with flow react type defs
 */
//$FlowFixMe
import type { Context } from 'react';
import type { Store, Action } from 'redux';

/**
 * A key used to identify our redux store in the global ReduxProviderContext
 */
export type UniqueReduxStoreKey = Symbol | string;

/**
 * The type definition of the map in ReduxProviderContext
 */
export type ReduxStoreMap = { [UniqueReduxStoreKey] : Store<any, Action> };

export type ReduxProviderContextDefinition = Context<ReduxStoreMap>;

/**
 * Default store key
 * @type {symbol | *}
 */
export const DefaultReduxStoreKey : UniqueReduxStoreKey = Symbol(
  'UniqueDefaultReduxStoreKey!',
);

/**
 * Create a global context to store our redux store
 * @returns {{$$typeof, _calculateChangedBits, _currentValue, _currentValue2, Provider, Consumer}}
 */
export const ReduxProviderContext : ReduxProviderContextDefinition = React.createContext(
  {},
);
