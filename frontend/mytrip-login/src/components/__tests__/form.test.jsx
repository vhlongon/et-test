import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';
import { MyTripForm } from '../form';
import Routes from '../routes';

describe('<MyTripForm/>', () => {
    it('renders the MyTripForm component containing 2 Field components from Redux-form', () => {
        // const fields = component.find('.mytrip-content__login-form-input-field').nodes;
        const component = shallow(<MyTripForm />);
        expect(component.find(Field).length === 2).toBe(true);
    });

    it('renders an input field for email', () => {
        const component = shallow(<MyTripForm />);
        const fields = component.find('.mytrip-content__login-form-input-field').nodes;
        expect(fields[0].props.name === 'email').toBe(true);
        expect(fields[0].props.type === 'text').toBe(true);
    });

    it('renders an input field for booking number', () => {
        const component = shallow(<MyTripForm />);
        const fields = component.find('.mytrip-content__login-form-input-field').nodes;
        expect(fields[1].props.name === 'bookingNumber').toBe(true);
        expect(fields[1].props.type === 'password').toBe(true);
    });

    it('renders a submit button', () => {
        const component = shallow(<MyTripForm />);
        expect(component.find('button').prop('type')).toBe('submit');
    });

    describe('onSubmit', () => {
        it('triggers callback onSubmit', () => {
            const values = { email: 'email@email.com', bookingNumber: 12345};
            const handleSubmit = jest.fn();
            const component = shallow(<MyTripForm handleSubmit={() => handleSubmit({values})} />);
            component.find('form').simulate('submit');
            expect(handleSubmit).toHaveBeenCalledWith({values});
      });
    });

});