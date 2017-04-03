import React from 'react';
import { shallow } from 'enzyme';
import { SignupPage} from '../signup';
import Page from '../../page';
import MyTripForm from '../../form';

const baseProps = {
    signup: () => {}
};

describe('<SignupPage/>', () => {
    it('renders the SignupPage component and a Page component of type "Sign- up"', () => {
        const component = shallow(<SignupPage {...baseProps} />);
        const page = component.find('Page');
        expect(page.length).toBe(1);
        expect(page.props().type).toBe('signup');
    });
    
    it('render a form for signup', () => {
        const component = shallow(<SignupPage {...baseProps} />);
        const signupForm = component.find(MyTripForm);
        expect(signupForm.length).toBe(1);
        expect(signupForm.props().type).toBe('Sign-up');
    });
});