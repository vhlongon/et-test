import React from 'react';
import { shallow } from 'enzyme';
import {App} from '../app';
import Routes from '../routes';

describe('<App/>', () => {
    const baseProps = {
        login: () => {},
        logout: () => {},
        signup: () => {},
    };
    it('renders the App component containing the routes component', () => {
        const PROPS = { ...baseProps, isAuthenticated: true };
        const component = shallow(<App {...PROPS} />);
        expect(component.find('Routes').length === 1).toBe(true);
    });
});