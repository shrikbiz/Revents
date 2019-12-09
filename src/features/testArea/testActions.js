//actions are just object
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';
//the payload can only be an object or some data


export const incrementCounter = () =>{
    return {
      type: INCREMENT_COUNTER
    };
}

export const decrementCounter = () => {
  return {
      type: DECREMENT_COUNTER
  };
};