import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import Navbar from '../navbar';
import {logout} from '../../actions/index';
import * as types from '../../actions/constants';

describe('<Navbar/>', () => {
    describe('when user is authenticated', () => {
        const props = {
            isAuthenticated: false
        };

        it('renders a link to the login page', () => {
          const component = shallow(<Navbar {...props} />);
          expect(component.contains(<Link to="/login">Login</Link>)).toBe(true);
        });

        it('does not render a link to the MyTrip page', () => {
            const component = shallow(<Navbar {...props} />);
          expect(component.contains(<Link to="/mytrip">MyTrip</Link>)).toBe(false);
        });

        it('does not render a link to logout', () => {
          const component = shallow(<Navbar />);
          const linkPaths = [];
          component
            .find(Link)
            .forEach(link => linkPaths.push(link.prop('to')));
          const logoutLink = linkPaths.find(path => path === '/logout');
          expect(logoutLink).toBe(undefined);
        });
    });

    describe('when user is authenticated', () => {
        const props = {
            isAuthenticated: true
        };

        it('does not render a link to the login page', () => {
          const component = shallow(<Navbar {...props} />);
          expect(component.contains(<Link to="/login">Login</Link>)).toBe(false);
        });

        it('renders a link to the MyTrip page', () => {
          const component = shallow(<Navbar {...props} />);
          expect(component.contains(<Link to="/mytrip">MyTrip</Link>)).toBe(true);
        });

        it('renders a link to logout', () => {
          const component = shallow(<Navbar {...props} />);
          const linkPaths = [];
          component
            .find(Link)
            .forEach(link => linkPaths.push(link.prop('to')));
          const logoutLink = linkPaths.find(path => path === '/logout');
          expect(logoutLink).toBeDefined();
        });

        describe('when user clicks logout', () => {
            //@TODO
        });
    });
});