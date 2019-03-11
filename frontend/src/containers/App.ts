import { connect } from 'react-redux';
import { validateUser, getDBUser } from '../actions/authActions';
import App from '../components/App/App';

interface InterfaceState {
  auth: {
    user: string;
  };
  validateUser: typeof validateUser;
  getDBUser: typeof getDBUser;
}

const mapStateToProps = (state: InterfaceState): InterfaceState => ({
  auth: state.auth,
  validateUser,
  getDBUser,
});

const AppContainer = connect(
  mapStateToProps,
  { validateUser, getDBUser },
)(App);

export default AppContainer;
