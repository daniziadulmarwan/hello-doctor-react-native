//import createStore from redux
import {createStore} from 'redux';

//create global state
const initialState = {
  loading: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
