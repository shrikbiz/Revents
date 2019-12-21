import { combineReducers } from "redux";
import { reducer as FormResuser } from 'redux-form'
import testReducer from '../../features/testArea/testReducer';
import eventReducer from "../../features/eventReducer";

const rootReducers = combineReducers({
    form: FormResuser,
    test: testReducer,
    events: eventReducer
})

export default rootReducers;