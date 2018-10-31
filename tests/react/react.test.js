// @flow
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { MockApp } from '../__fixtures__/react/MockApp';
import { createStore } from 'redux';
import { mockUserReducer } from '../__fixtures__/redux/reducer.mock';
import { mockReduxStore } from '../../src/helpers/mockReduxStore';
import { ManageMockUsers } from '../__fixtures__/react/ManageMockUsers';
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
    mockReduxStore.createStore(createStore(mockUserReducer));
    let component = ReactTestRenderer.create(<ManageMockUsers />);
    const button = component.root.find(el => el.props.id === 'fetch-users');
    button.props.onClick();
    component.update(<ManageMockUsers />);
    expect(component.toJSON()).toMatchSnapshot();
    mockReduxStore.teardown();
  });
});
