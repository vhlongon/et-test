import React from 'react';
import { shallow } from 'enzyme';
import NoPageFoundPage from '../notfound';
import Page from '../../page';

describe('<NoPageFoundPage/>', () => {
    it('renders the NoPageFoundPage component', () => {
        const component = shallow(<NoPageFoundPage />);
        const page = component.find('Page');
        expect(page.length).toBe(1);
        expect(page.props().type).toBe('notfound');
    });
});