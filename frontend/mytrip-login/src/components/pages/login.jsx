import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../page';
import MyTripForm from '../form';
import { login } from '../../actions/index';

export class LoginPage extends Component {
  
  handleSubmit = values => {
    const {email, bookingNumber} = values;
    this.props.login(email, bookingNumber);
  }

  render() {
    return (
      <Page type="login">
        <h2>Login page</h2>
        <MyTripForm type="Login" onSubmit={this.handleSubmit}>
          <span>{this.props.error || ''}</span>
        </MyTripForm>
      </Page>
    );
  }
}

LoginPage.propTypes = {
  login: React.PropTypes.func.isRequired
};

const mapStateToProps = ({login: {error}}) => ({ error });

export default connect(mapStateToProps, { login })(LoginPage);