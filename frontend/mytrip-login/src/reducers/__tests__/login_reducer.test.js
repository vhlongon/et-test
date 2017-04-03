import loginReducer from '../login_reducer';
import * as types from '../../actions/constants';
import { isAuthenticated } from '../../utils/authUtil';
import deepFreeze from 'deep-freeze';

jest.mock('../../utils/authUtil');

describe('login reducer', () => {
    const INITIAL_STATE = {
        isAuthenticated: isAuthenticated(),
        error: null
    }
    deepFreeze(INITIAL_STATE);
    it('should return the initial state', () => {
        expect(
        loginReducer(undefined, {})
        ).toEqual(INITIAL_STATE)
    });

    it('should handle LOGIN_FULFILLED', () => {
        deepFreeze(INITIAL_STATE);
        expect(
            loginReducer(INITIAL_STATE, {
            type: types.LOGIN_FULFILLED
        })
        ).toEqual(
            {
                error: null,
                isAuthenticated: true,
            }
        )
    });
    it('should handle LOGIN_REJECTED', () => {
        const ERROR_MESSAGE = 'HTTP Error Unauthorized';
        const PREVIOUS_STATE = {
            error: null,
            isAuthenticated: true
        };
        deepFreeze(PREVIOUS_STATE);
        expect(
            loginReducer(PREVIOUS_STATE, {
            type: types.LOGIN_REJECTED,
            error: {
                message: ERROR_MESSAGE
            }
        })
        ).toEqual(
            {
                isAuthenticated: false,
                error: ERROR_MESSAGE,
            }
        )
    });
    it('should handle LOGOUT', () => {
        const PREVIOUS_STATE = {
            error: null,
            isAuthenticated: true
        };
        deepFreeze(PREVIOUS_STATE);
        expect(
            loginReducer(PREVIOUS_STATE, {
            type: types.LOGOUT,
            error: ""
        })
        ).toEqual(
            {
                isAuthenticated: false,
                error: "",
            }
        )
    });
});