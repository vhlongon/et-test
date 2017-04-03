import signupReducer from '../signup_reducer';
import * as types from '../../actions/constants';
import { isAuthenticated } from '../../utils/authUtil';
import deepFreeze from 'deep-freeze';

jest.mock('../../utils/authUtil');

describe('signup reducer', () => {
    const INITIAL_STATE = {
        isAuthenticated: isAuthenticated(),
        error: null
    }
    deepFreeze(INITIAL_STATE);
    it('should return the initial state', () => {
        expect(
        signupReducer(undefined, {})
        ).toEqual(INITIAL_STATE)
    });

    it('should handle SIGNUP_FULFILLED', () => {
        deepFreeze(INITIAL_STATE);
        expect(
            signupReducer(INITIAL_STATE, {
            type: types.SIGNUP_FULFILLED
        })
        ).toEqual(
            {
                error: null,
                isAuthenticated: true,
            }
        )
    });
    it('should handle SIGNUP_REJECTED', () => {
        const ERROR_MESSAGE = 'HTTP Error Unauthorized';
        const PREVIOUS_STATE = {
            error: null,
            isAuthenticated: true
        };
        deepFreeze(PREVIOUS_STATE);
        expect(
            signupReducer(PREVIOUS_STATE, {
            type: types.SIGNUP_REJECTED,
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
            signupReducer(PREVIOUS_STATE, {
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