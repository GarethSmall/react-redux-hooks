//@flow
import React from 'react';
import { createStore } from 'redux';
import { mockUserReducer } from '../redux/reducer.mock';
import { ReduxProvider } from '../../../src/ReduxProvider';
import { ManageMockUsers } from './ManageMockUsers';
import { PageThatShouldNotReRender } from './PageThatShouldNotReRender';

const store = createStore(mockUserReducer);

export function MockApp() {
  return (
    <ReduxProvider store={store}>
      <ManageMockUsers />
      <PageThatShouldNotReRender />
    </ReduxProvider>
  );
}
