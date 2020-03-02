import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App';
import Header from './components/header/header.component';

test('renders learn react link', () => {
  expect(shallow(<App />).find(<Header></Header>)).toBe('foo');
});
