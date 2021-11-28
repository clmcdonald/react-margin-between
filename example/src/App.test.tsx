import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

describe('example tests', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
