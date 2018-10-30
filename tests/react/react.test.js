// @flow
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { MockApp } from '../__fixtures__/react/MockApp';
import { useReduxStore } from '../../src/useReduxStore';
import { createStore } from 'redux';
import { mockUserReducer } from '../__fixtures__/redux/reducer.mock';
const { describe, test, expect } = global;

/**
 * Tests:
 */
describe('react', () => {
  test('should render with provider', () => {
    let component = ReactTestRenderer.create(<MockApp />);
    const button = component.root.find(el => el.props.id === 'fetch-users');
    button.props.onClick();
    component.update(<MockApp />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('should render with mock store', () => {
    const mockReduxStore = useReduxStore('test', { test: createStore(mockUserReducer) });
    jest.mock('../../src/useReduxStore', () => ({
      useReduxStore: () => mockReduxStore,
    }));
    let component = ReactTestRenderer.create(<MockApp />);
    const button = component.root.find(el => el.props.id === 'fetch-users');
    button.props.onClick();
    component.update(<MockApp />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
