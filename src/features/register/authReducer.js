
import { createReducers } from '../../app/common/utils/reducerUtils';
import { LOGIN_USER, SIGN_OUT_USER } from './authConstants';
const initialState ={
    authenticated: false,
    currentUser: null
}

const loginUser = (state, payload) => {
    return {
        authenticated: true,
        currentUser: payload.creds.email
    }
}

const SignOutUser = () => {
    return {
        authenticated: false,
        current: null
    }
}

export default createReducers(initialState,{
    [LOGIN_USER] : loginUser,
    [SIGN_OUT_USER]: SignOutUser
})