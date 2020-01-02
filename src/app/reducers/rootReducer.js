import { combineReducers } from "redux";
import { reducer as FormResuser } from 'redux-form'
import testReducer from '../../features/testArea/testReducer';
import eventReducer from "../../features/events/eventReducer";
import modalReducer from "../../features/modals/modalReducer";
import authReducer from "../../features/register/authReducer";

const rootReducers = combineReducers({
    form: FormResuser,
    test: testReducer,
    events: eventReducer,
    modals: modalReducer,
    auth: authReducer
})

export default rootReducers;