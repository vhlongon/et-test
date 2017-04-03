import React from 'react';
import {
    BrowserRouter,
    Match,
    Miss,
    Redirect,
} from 'react-router';
import NavBar from './navbar';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import MyTripPage from './pages/mytrip';
import NoPageFoundPage from './pages/notfound';

import { Left, Right } from '../../utils/generalUtils';

const pageDecider = isAuthorized =>
isAuthorized ? Right(isAuthorized) : Left(isAuthorized);

const Routes = ({ isAuthenticated, logout}) => {
    return (
        <BrowserRouter>
        <div>
            <NavBar isAuthenticated={isAuthenticated} 
                logout={e => {
                    e.preventDefault(); 
                    logout();
                }} 
            />
            <section className="mytrip-content">
            <Match exactly pattern="/" component={HomePage}/>
            <Match
                pattern="/login"
                render={props =>
                pageDecider(isAuthenticated)
                    .fold(
                    () => <LoginPage />,
                    () => <Redirect to={{ pathname: '/mytrip', state: { from: props.location } }}/>
                    )
                }
            />
            <Match
                pattern="/signup"
                render={props =>
                pageDecider(isAuthenticated)
                    .fold(
                    () => <SignupPage />,
                    () => <Redirect to={{ pathname: '/mytrip', state: { from: props.location } }}/>
                    )
                }
            />
            <Match
                pattern="/logout"
                render={props =>
                <Redirect
                    {...props}
                    to={{
                    pathname: '/login',
                    state: { from: props.location },
                    }}
                />
                }
            />
            <Match
                pattern="/mytrip"
                render={props =>
                pageDecider(isAuthenticated)
                    .fold(
                    () => <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>,
                    () => <MyTripPage />
                    )
                }
            />
            <Miss component={NoPageFoundPage}/>
            </section>
        </div>
        </BrowserRouter>
    )
};

Routes.proTypes = {
    isAuthenticated: React.PropTypes.bool.isRequired,
    logout: React.PropTypes.func.isRequired
}

export default Routes;