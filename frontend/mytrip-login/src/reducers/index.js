import { combineReducers } from 'redux';
import loginReducer from './login_reducer';
import signupReducer from './signup_reducer';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
    login: loginReducer,
    signup: signupReducer,
    form: FormReducer,
});

export default rootReducer;
