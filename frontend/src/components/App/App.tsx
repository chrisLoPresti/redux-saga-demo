import React from 'react';
import { validateUser, getDBUser } from '../../actions/authActions';
import logo from './logo.svg';
import './App.css';

interface InterfaceProps {
  auth: {
    user: string;
  };
  validateUser: typeof validateUser;
  getDBUser: typeof getDBUser;
}

const handleEvent = (
  event: React.KeyboardEvent<HTMLInputElement>,
  func: typeof validateUser,
  value: string,
): void => {
  if (event.key === 'Enter') {
    func(value);
  }
};

const App = (props: InterfaceProps): JSX.Element => {
  const {
    auth,
    validateUser: validateUserProp,
    getDBUser: getDBUserProps,
  } = props;

  if (!auth.user) {
    getDBUserProps();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{auth.user}</p>
        <button
          type="button"
          onClick={() =>
            validateUserProp(
              (document.getElementById('input') as HTMLInputElement).value,
            )
          }
        >
          Change user
        </button>
        <input
          id="input"
          type="text"
          onKeyPress={event =>
            handleEvent(
              event,
              validateUserProp,
              (document.getElementById('input') as HTMLInputElement).value,
            )
          }
        />
      </header>
    </div>
  );
};

export default App;
