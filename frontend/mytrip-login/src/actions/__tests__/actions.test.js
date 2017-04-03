import * as myTripAPI from '../../services/myTripAPI';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../index';
import * as types from '../constants';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

describe('async actions', () => {
   
    it('creates LOGIN_FULFILLED', () => {
        //@TODO
    })
    it('creates LOGIN_REJECTED', () => {
        //@TODO
    })
    it('creates SIGNUP_FULFILLED', () => {
        //@TODO
    })
    it('creates SIGNUP_REJECTED', () => {
        //@TODO
    })
    it('creates LOGOUT', () => {
        //@TODO
    })
})