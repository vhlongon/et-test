import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../page';
import MyTripForm from '../form';
import { signup } from '../../actions/index';

export class SignupPage extends Component {

  handleSubmit = values => {
    const {email, bookingNumber} = values;
    this.props.signup(email, bookingNumber);
  }

  render() {
    return (
      <Page type="signup">
        <h2>Sign-up page</h2>
        <MyTripForm type="Sign-up" onSubmit={this.handleSubmit}>
          <span>{this.props.error || ''}</span>
        </MyTripForm>
      </Page>
    );
  }
}

SignupPage.propTypes = {
  signup: React.PropTypes.func.isRequired
};

const mapStateToProps = ({signup: {error}}) => ({ error });

export default connect(mapStateToProps, { signup })(SignupPage);