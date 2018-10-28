//@flow
import React from 'react';
import type { Node } from 'react';
import type { Store, Action } from 'redux';
import ReduxProviderContext from './ReduxProviderContext';

type Props = {
  children : Node | Node[],
  store : Store<any, Action>,
}

function ReduxProvider(props : Props) {
  const { children, store } = props;
  return (
    <ReduxProviderContext.Provider value={store}>
      {children}
    </ReduxProviderContext.Provider>
  );
}

export default ReduxProvider;