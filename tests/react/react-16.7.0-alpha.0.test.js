// @flow
import React from 'react';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import { MockApp } from '../__fixtures__/react/MockApp';
const { describe, test, expect } = global;

Enzyme.configure({ adapter: new Adapter() });

describe('react-16.7.0-alpha.0.test.js', () => {
  test('should render', () => {
    const component = mount(<MockApp />);
    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
  });
});
