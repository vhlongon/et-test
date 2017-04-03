import React from 'react';
import { shallow } from 'enzyme';
import { Link, Match, Miss } from 'react-router';
import Routes from '../routes';
import NoPageFoundPage from '../pages/notfound';

describe('<Routes/>', () => {
    const baseProps = {
        login: () => {},
    };

    describe('when user is not authenticated', () => {
            const PROPS = { ...baseProps, isAuthenticated: false};
        it('matches component to url /login', () => {
            const component = shallow(<Routes {...PROPS} />);
            const matchPatterns = [];
            component
                .find(Match)
                .forEach(match => matchPatterns.push(match.prop('pattern')));
            const loginPattern = matchPatterns
                .find(pattern => pattern === '/login');
            expect(loginPattern).toBeDefined();
        });

        it('does not render a link to logout', () => {
            const component = shallow(<Routes {...PROPS} />);
            const linkPaths = [];
            component
                .find(Link)
                .forEach(link => linkPaths.push(link.prop('to')));
            const logoutLink = linkPaths.find(path => path === '/logout');
            expect(logoutLink).toBe(undefined);
        });
    });

    describe('when user is authenticated', () => {
        const PROPS = { ...baseProps, isAuthenticated: true };
        it('matches component to url /mytrip', () => {
            const component = shallow(<Routes {...PROPS} />);
            const matchPatterns = [];
            component
                .find(Match)
                .forEach(match => matchPatterns.push(match.prop('pattern')));
            const loginPattern = matchPatterns
                .find(pattern => pattern === '/mytrip');
            expect(loginPattern).toBeDefined();
        });

        it('matches component to url /logout', () => {
            const component = shallow(<Routes {...PROPS} />);
            const matchPatterns = [];
            component
                .find(Match)
                .forEach(match => matchPatterns.push(match.prop('pattern')));
            const loginPattern = matchPatterns
                .find(pattern => pattern === '/logout');
            expect(loginPattern).toBeDefined();
        });
    });

    describe('when url does not match an existing page', () => {
        // isAuthenticated can be either true or false in the case
        const PROPS = { ...baseProps, isAuthenticated: true };
        it('renders an appropriate page', () => {
            const component = shallow(<Routes {...PROPS} />);
            expect(component.contains(
                <Miss component={NoPageFoundPage}/>
            )).toBe(true);
        });
    });
});