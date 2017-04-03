import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const MyTripForm = props => {
    const { handleSubmit, pristine, submitting, type } = props
    return (
        <form onSubmit={handleSubmit}>
            <div className="mytrip-content__login-form-row">
                <label htmlFor="email">Email:</label>
                <div>
                    <Field name="email" 
                        className="mytrip-content__login-form-input-field"
                        component="input" 
                        type="text" 
                        placeholder="Email" />
                </div>
            </div>
            <div className="mytrip-content__login-form-row">
                <label htmlFor="bookingNumber">Booking number:</label>
                <div>
                    <Field name="bookingNumber"
                        className="mytrip-content__login-form-input-field"
                        component="input" 
                        type="password" 
                        placeholder="123456" />
                </div>
            </div>
            <div className="mytrip-content__login-form-row">
                <button type="submit" disabled={pristine || submitting}>{type}</button>
            </div>
            {props.children}
        </form>
    )
}

MyTripForm.proTypes = {
    type: React.PropTypes.string.isRequired
};

export default reduxForm({
    fields: ['email', 'bookingNumber'],
    form: 'mytripform'
})(MyTripForm);