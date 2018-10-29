//@flow
import React from 'react';
import ReduxProvider from '../../../src/ReduxProvider';
import { createStore } from 'redux';
import { mockUserReducer } from '../redux/reducer.mock';
import MockUserList from './MockUserList';

const store = createStore(mockUserReducer);

export function MockApp() {
  return (
    <ReduxProvider store={store}>
      <MockUserList />
    </ReduxProvider>
  );
}
