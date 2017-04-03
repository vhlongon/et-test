import { 
    LOGIN_REJECTED,
    LOGIN_FULFILLED, 
    LOGOUT,
    SIGNUP_FULFILLED,
    SIGNUP_REJECTED

} from './constants';
import { isAuthenticated, markSessionAsAuthenticated, clearSession } from '../utils/authUtil';
import * as myTripAPI from '../services/myTripAPI';
import { generateEncryption} from '../utils/encryption';

//HELPERS TO HANDLE DATA SUBMISSION TO MOCK API AND 
// PERSIST AUTH STATUS TO LOCAL STORAGE RESPECTIVELY 
function handleSubmission(type, email, bookingNumber) {
    return new Promise((resolve, reject) => {
        return myTripAPI[type](email, bookingNumber)
        .then(persistJWT)
        .then((data) => 
            isAuthenticated() && resolve(true)
        )
        .catch(e => 
            reject(e)
        );
    })
}
function persistJWT(data) {
    if (data.jwt !== null) {
        markSessionAsAuthenticated(data.jwt);
    }
    return data;
}

// LOGIN ACTIONS
const loginSuccess = res => ({
    type: LOGIN_FULFILLED, 
    isAuthenticated: res
});
const loginFail = e => ({
    type: LOGIN_REJECTED,
    error: e
});
    
// LOGIN ACTION CREATOR
export function login(email, bookingNumber) {
    const {cipher} = generateEncryption(bookingNumber);
    return dispatch => {
        handleSubmission('login', email, cipher)
        .then(res => 
            dispatch(loginSuccess(res))
        )
        .catch(e => 
            dispatch(loginFail(e))
        );
    }
};

// SIGN-UP ACTIONS
const signupSuccess = res => ({
    type: SIGNUP_FULFILLED,
    isAuthenticated: res
});
const signupFail = e => ({
    type: SIGNUP_REJECTED,
    error: e
});

// SIGN-UP ACTION CREATOR
export function signup(email, bookingNumber) {
    const { cipher } = generateEncryption(bookingNumber);
    return dispatch => {
        handleSubmission('signup', email, cipher)
            .then(res => 
                dispatch(signupSuccess(res))
            )
            .catch(e => 
                dispatch(signupFail(e))
            );
    }
};

const logoutAction = () => ({
   type: LOGOUT,
   error: null 
})
// LOGOUT ACTION CREATOR
export function logout() {
    clearSession();
    return logoutAction();
}