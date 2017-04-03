import React from 'react';
import { shallow } from 'enzyme';
import Page from '../page';

describe('<Page/>', () => {
    it('renders the Page component and its subcomponents', () => {
        const props = {
            type: 'home',
        }
        const component = shallow(<Page {...props} ><h2>Home Page</h2></Page>);
        expect(component.find('section').hasClass('my-trip-page--home')).toBeFalse(true);
        expect(component.find('h2').length === 1).toBe(true);
    });
});
