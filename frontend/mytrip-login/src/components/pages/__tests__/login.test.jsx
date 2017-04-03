import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage} from '../login';
import Page from '../../page';
import MyTripForm from '../../form';

const baseProps = {
    login: () => {}
};

describe('<LoginPage/>', () => {
    it('renders the LoginPage component and a Page component of type "Sign- up"', () => {
        const component = shallow(<LoginPage {...baseProps} />);
        const page = component.find('Page');
        expect(page.length).toBe(1);
        expect(page.props().type).toBe('login');
    });
    
    it('render a form for signup', () => {
        const component = shallow(<LoginPage {...baseProps} />);
        const signupForm = component.find(MyTripForm);
        expect(signupForm.length).toBe(1);
        expect(signupForm.props().type).toBe('Login');
    });
});