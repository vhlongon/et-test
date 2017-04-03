import React from 'react';
import Routes from './routes';
import {connect} from 'react-redux';
import {login, logout, signup} from '../actions/index';

export const App = (props) => (
  <Routes {...props} />
);



const mapStateToProps = (state) =>{
  const {login, signup} = state;
  return { isAuthenticated: login.isAuthenticated || signup.isAuthenticated }
}

App.propTypes = {
  isAuthenticated: React.PropTypes.bool.isRequired,
  login: React.PropTypes.func.isRequired,
  signup: React.PropTypes.func.isRequired,
  logout: React.PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { login, logout, signup })(App);


