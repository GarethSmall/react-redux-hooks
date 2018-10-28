//@flow
import React from 'react';
import type { Context } from 'react';
import type { Store, Action } from 'redux';

export type UniqueReduxStoreKey = string;

export type ReduxProviderContextDefinition = Context<{ [UniqueReduxStoreKey] : Store<any, Action> }>;

export const DefaultReduxStoreKey : UniqueReduxStoreKey = 'UniqueDefaultReduxStoreKey!';

/**
 * Create a context to use in our provider
 * @returns {{$$typeof, _calculateChangedBits, _currentValue, _currentValue2, Provider, Consumer}}
 */
const ReduxProviderContext : ReduxProviderContextDefinition =  React.createContext({});

export default ReduxProviderContext;