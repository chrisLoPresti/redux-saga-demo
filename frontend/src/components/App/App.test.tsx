import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const InterfaceProps = {
  auth: {
    user: 'chris',
  },
  validateUser: jest.fn(),
  getDBUser: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App {...InterfaceProps} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
