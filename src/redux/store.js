//import createStore from redux
import {createStore} from 'redux';

//create global state
const initialState = {
  loading: true,
};

const reducer = (state = initialState, action) => {
  return state;
};

const store = createStore(reducer);

export default store;
