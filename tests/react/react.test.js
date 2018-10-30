// @flow
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { MockApp } from '../__fixtures__/react/MockApp';
const { describe, test, expect } = global;


/**
 * Tests:
 */
describe('react', () => {
  test('should render', () => {
    let component = ReactTestRenderer.create(<MockApp />);
    const button = component.root.find(el => el.props.id === 'fetch-users');
    button.props.onClick();
    component.update(<MockApp />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
