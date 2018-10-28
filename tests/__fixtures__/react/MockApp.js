//@flow
import React from 'react';
import ReduxProvider from '../../../src/ReduxProvider';
import { createStore } from 'redux';
import { mockUserReducer } from '../redux/reducer.mock';

const store = createStore(mockUserReducer);

export function MockApp() {
  return (
    <ReduxProvider store={store}>
      <div>
        hi
      </div>
    </ReduxProvider>
  );
}