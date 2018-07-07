import { FETCH_USER } from '../actions';

const initialState = null;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || null;
    default:
      return state;
  }
};

export { authReducer };
