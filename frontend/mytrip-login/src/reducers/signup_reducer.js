import { SIGNUP_FULFILLED, SIGNUP_REJECTED, LOGOUT } from '../actions/constants';
import { isAuthenticated } from '../utils/authUtil';

const INITIAL_STATE = {
    isAuthenticated: isAuthenticated(),
    error: null
}

export default function signupReducer(state = INITIAL_STATE, action) {
    const {type} = action;
    switch (type) {
        case SIGNUP_FULFILLED:
            return {
                ...state,
                isAuthenticated: true,
            };
        case SIGNUP_REJECTED:
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                error: action.error ? action.error.message : ''
            };
        default:
            return state;
    }
}