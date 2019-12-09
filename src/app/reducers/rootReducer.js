import { combineReducers } from "redux";
import testReducer from '../../features/testArea/testReducer';

const rootReducers = combineReducers({
    test: testReducer
})

export default rootReducers;