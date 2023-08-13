import { createStore } from 'redux';

// Initial state
const initialState = {
  data: {
    key1: 'value1',
    key2: 'value2',
    // ...
  },
};

// Reducer function
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add other actions if needed
    default:
      return state;
  }
};

// Create the Redux store
const store = createStore(dataReducer);

export default store;
