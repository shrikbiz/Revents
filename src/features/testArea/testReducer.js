//we are giving some initial state to reducer by initialState
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducers } from '../../app/common/utils/reducerUtils';
//this state is nothing but obejct containing data
const initialState = {
  data: 42
};

//now we are creating a reducer

// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return {...state, data: state.data + 1 };
//     case DECREMENT_COUNTER:
//       return {...state, data: state.data - 1 };
//     default:
//       return state;
//   }
// };
// export default testReducer;


//new way of specifying reducers

const incrementCounter = (state) =>{
  return { ...state, data: state.data + 1 };
}

const decrementCounter = state => {
  return { ...state, data: state.data - 1 };
};

export default createReducers(initialState, {
  [INCREMENT_COUNTER]: incrementCounter,
  [DECREMENT_COUNTER]: decrementCounter
});


