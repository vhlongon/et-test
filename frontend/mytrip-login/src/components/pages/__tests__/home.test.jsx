import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../home';
import Page from '../../page';

describe('<Homepage/>', () => {
    it('renders the Homepage component', () => {
        const component = shallow(<HomePage />);
        const page = component.find('Page');
        expect(page.length).toBe(1);
        expect(page.props().type).toBe('home');
    });
});