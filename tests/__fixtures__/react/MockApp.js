//@flow
import React from 'react';
import ReduxProvider from '../../../src/ReduxProvider';

//const store = createStore(mockUserReducer);

//const mockReduxContext = createReduxContext(store);

export function MockApp() {
  return (
    <ReduxProvider>
      <div>
        hi
      </div>
    </ReduxProvider>
  );
}