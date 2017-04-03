import React from 'react';
import { shallow } from 'enzyme';
import Mytrip from '../mytrip';
import Page from '../../page';

describe('<Mytrip/>', () => {
    it('renders the Mytrip component', () => {
        const component = shallow(<Mytrip />);
        const page = component.find('Page');
        expect(page.length).toBe(1);
        expect(page.props().type).toBe('mytrip');
    });
});